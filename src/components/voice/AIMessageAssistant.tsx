"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useRef, useEffect } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { MessageCircle, Send, Loader2, Bot, User, Sparkles, Wifi, WifiOff } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isOffline?: boolean;
}

function AIMessageAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOnlineMode, setIsOnlineMode] = useState(true);
  const { user } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: "welcome",
      content: `Hello ${user?.firstName || "there"}! 👋 I'm Riley, your intelligent dental assistant at DentalCare. I'm here to help you with dental questions, service information, and health guidance. How can I assist you today?`,
      role: "assistant",
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, [user?.firstName]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage("");
    setIsLoading(true);

    // Try online AI first
    try {
      const conversationHistory = messages
        .filter(m => m.id !== "welcome")
        .map(msg => ({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        }));

      conversationHistory.push({
        role: "user",
        parts: [{ text: currentInput }]
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: conversationHistory,
            systemInstruction: {
              parts: [{ text: getDentalCareSystemPrompt() }]
            },
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 2048,
            },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
            ],
          }),
        }
      );

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.candidates[0].content.parts[0].text,
          role: "assistant",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsOnlineMode(true);
      } else {
        throw new Error("Invalid response");
      }

    } catch (error) {
      console.error("AI Error, using offline mode:", error);
      // Use offline fallback
      setIsOnlineMode(false);
      const offlineResponse = getOfflineResponse(currentInput);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: offlineResponse,
        role: "assistant",
        timestamp: new Date(),
        isOffline: true,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-8">
      {/* Professional Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-2xl border border-teal-200 dark:border-teal-800">
              <MessageCircle className="w-10 h-10 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Dental AI Assistant
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Professional dental guidance powered by advanced AI technology
        </p>
        
        {/* Status Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-card shadow-sm">
          {isOnlineMode ? (
            <>
              <Wifi className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-medium text-teal-600">AI Mode Active</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">Offline Mode</span>
            </>
          )}
        </div>
      </div>

      {/* Professional Chat Card */}
      <Card className="border-2 border-teal-100 dark:border-teal-900 shadow-xl overflow-hidden bg-gradient-to-b from-white to-teal-50/30 dark:from-gray-950 dark:to-teal-950/20">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Riley - Dental Assistant</h3>
                <p className="text-xs text-teal-100">Always here to help</p>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>
        </div>

        {/* Messages Area */}
        <ScrollArea className="h-[500px] p-6 bg-white/50 dark:bg-gray-900/50">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${
                    message.role === "assistant"
                      ? "bg-gradient-to-br from-teal-500 to-cyan-500 text-white"
                      : "bg-gradient-to-br from-gray-600 to-gray-700 text-white"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="w-6 h-6" />
                  ) : (
                    <User className="w-6 h-6" />
                  )}
                </div>

                {/* Message Content */}
                <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {message.role === "assistant" ? "Riley" : "You"}
                    </span>
                    {message.isOffline && (
                      <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full border border-amber-300">
                        Offline
                      </span>
                    )}
                  </div>
                  <div
                    className={`inline-block max-w-[85%] rounded-2xl px-5 py-4 shadow-md ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-tr-sm"
                        : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {message.content}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 px-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                    Riley
                  </span>
                  <div className="inline-block rounded-2xl px-5 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-tl-sm">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin text-teal-600" />
                      <span className="text-sm text-muted-foreground">Analyzing your question...</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t-2 border-teal-100 dark:border-teal-900 bg-gradient-to-r from-teal-50/50 to-cyan-50/50 dark:from-teal-950/20 dark:to-cyan-950/20 p-5">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about dental services, pain relief, or oral health..."
                disabled={isLoading}
                className="h-12 pr-12 bg-white dark:bg-gray-900 border-2 border-teal-200 dark:border-teal-800 focus:border-teal-500 rounded-xl text-base shadow-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-teal-400" />
              </div>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isLoading}
              size="lg"
              className="h-12 px-6 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3">
            <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-xs font-mono">Enter</kbd> to send • 
            <kbd className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-xs font-mono ml-1">Shift+Enter</kbd> for new line
          </p>
        </div>
      </Card>

      {/* Quick Suggestions */}
      <div className="mt-8">
        <p className="text-sm font-medium text-center text-muted-foreground mb-4 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-600" />
          Common Questions
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "Service pricing",
            "Tooth pain relief",
            "Cavity prevention",
            "Book appointment",
          ].map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              onClick={() => setInputMessage(suggestion)}
              disabled={isLoading}
              className="border-2 border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-950 hover:border-teal-400 text-teal-700 dark:text-teal-300 font-medium rounded-lg transition-all duration-300"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      {/* Professional Footer */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 border border-teal-200 dark:border-teal-800 rounded-full">
          <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></div>
          <p className="text-xs text-muted-foreground">
            AI-powered guidance • Professional care recommended for diagnosis
          </p>
        </div>
      </div>
    </div>
  );
}

// System prompt for Gemini
function getDentalCareSystemPrompt(): string {
  return `You are Riley, a professional AI dental assistant for DentalCare. Provide helpful, accurate dental guidance.

## Services & Pricing
- Regular Checkup: $120 (30-45 min, every 6 months)
- Teeth Cleaning: $90 (45-60 min, every 6 months)
- Emergency Visit: $150 (urgent care, immediate relief)
- Consultation: $60 (30 min treatment discussion)

## Key Responsibilities
- Pain management advice (OTC medications only)
- Emergency guidance
- Preventive care tips
- Answer dental health questions
- Direct to professional care when needed

Keep responses concise (2-4 paragraphs), empathetic, and professional.`;
}

// OFFLINE FALLBACK RESPONSES
function getOfflineResponse(input: string): string {
  const q = input.toLowerCase();

  // Pricing
  if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("fee")) {
    return `Our transparent pricing:\n\n**Regular Checkup - $120**\nComprehensive exam, X-rays, health assessment (30-45 min, every 6 months)\n\n**Teeth Cleaning - $90**\nProfessional plaque removal and polishing (45-60 min, every 6 months)\n\n**Emergency Visit - $150**\nUrgent care for severe pain, broken teeth, infections\n\n**Consultation - $60**\n30-minute treatment discussion\n\nAll prices are transparent with no hidden fees. Which service interests you?`;
  }

  // Pain
  if (q.includes("pain") || q.includes("hurt") || q.includes("ache")) {
    if (q.includes("medicine") || q.includes("medication")) {
      return `For dental pain relief:\n\n**Over-the-Counter Options:**\n• Ibuprofen (Advil): 200-400mg every 4-6 hours\n• Acetaminophen (Tylenol): 500-1000mg every 4-6 hours\n\n**Additional Tips:**\n• Rinse with warm salt water\n• Apply cold compress\n• Avoid hot/cold foods\n\n**Important:** I cannot prescribe medications. For severe pain, book an Emergency Visit ($150) where a dentist can provide proper treatment and prescriptions if needed.`;
    }
    return `I'm sorry you're experiencing pain. For immediate relief:\n\n• Take OTC pain medication (ibuprofen or acetaminophen)\n• Rinse with warm salt water\n• Apply cold compress to cheek\n• Avoid hot/cold foods\n\nFor severe or persistent pain, book an Emergency Visit ($150) immediately. Dental pain often indicates underlying issues needing professional care.`;
  }

  // Hygiene
  if (q.includes("brush") || q.includes("clean") || q.includes("hygiene") || q.includes("floss")) {
    return `Essential oral hygiene tips:\n\n**Daily Routine:**\n• Brush twice daily (2 minutes, fluoride toothpaste)\n• Floss once daily\n• Use mouthwash\n• Replace toothbrush every 3-4 months\n\n**Professional Care:**\nOur Teeth Cleaning ($90) every 6 months removes hardened plaque and prevents gum disease.\n\n**Diet Tips:**\n• Limit sugary foods\n• Stay hydrated\n• Avoid frequent snacking`;
  }

  // Appointment
  if (q.includes("book") || q.includes("appointment") || q.includes("schedule")) {
    return `To book an appointment:\n\n1. Visit our appointment system on the DentalCare platform\n2. Select your preferred dentist\n3. Choose a convenient time\n4. Select your service\n5. Complete secure payment\n\nAvailable 24/7 for your convenience. Need help choosing the right service? I can explain our options!`;
  }

  // Emergency
  if (q.includes("emergency") || q.includes("urgent") || q.includes("swelling") || q.includes("broken")) {
    return `This sounds urgent. For dental emergencies:\n\n**Immediate Actions:**\n• Severe pain: Take pain medication, cold compress\n• Broken tooth: Save fragments, rinse mouth\n• Knocked-out tooth: Keep moist in milk\n\n**Seek Care If:**\n• Severe, persistent pain\n• Facial swelling\n• Uncontrolled bleeding\n• Difficulty breathing/swallowing\n\nBook Emergency Visit ($150) immediately or visit ER if life-threatening.`;
  }

  // Cavity/Decay
  if (q.includes("cavity") || q.includes("cavities") || q.includes("decay") || q.includes("filling")) {
    return `About cavities:\n\n**Prevention:**\n• Brush twice daily with fluoride toothpaste\n• Floss daily\n• Limit sugary foods\n• Regular checkups ($120) every 6 months\n\n**Signs:**\n• Tooth sensitivity\n• Visible holes or dark spots\n• Pain when biting\n\nCavities require professional treatment. Book a Regular Checkup ($120) for diagnosis and treatment plan.`;
  }

  // Sensitivity
  if (q.includes("sensitive") || q.includes("sensitivity")) {
    return `Tooth sensitivity solutions:\n\n**Immediate Relief:**\n• Use toothpaste for sensitive teeth (2-3 weeks)\n• Avoid hot/cold foods\n• Use soft-bristled brush\n• Don't brush too hard\n\n**Common Causes:**\n• Exposed roots\n• Worn enamel\n• Cavities\n• Gum recession\n\nBook a Regular Checkup ($120) to identify and treat the underlying cause.`;
  }

  // Whitening
  if (q.includes("white") || q.includes("whiten") || q.includes("stain") || q.includes("yellow")) {
    return `Teeth whitening options:\n\n**At-Home:**\n• Whitening toothpaste (2-4 weeks)\n• Reduce staining foods (coffee, wine)\n• Use straw for dark beverages\n\n**Professional:**\nBook a Consultation ($60) to discuss:\n• In-office whitening\n• Custom take-home trays\n• Best option for your needs\n\nProfessional whitening provides safest, most effective results.`;
  }

  // Bleeding gums
  if (q.includes("bleed") && q.includes("gum")) {
    return `Bleeding gums treatment:\n\n**Home Care:**\n• Continue flossing gently (bleeding will decrease)\n• Brush with soft bristles\n• Use antibacterial mouthwash\n• Stay hydrated\n\n**See Dentist If:**\n• Bleeding persists >1 week\n• Gums red, swollen, or painful\n• Bad breath present\n\nOur Teeth Cleaning ($90) removes plaque buildup causing inflammation.`;
  }

  // Children
  if (q.includes("child") || q.includes("kid") || q.includes("baby")) {
    return `Children's dental care:\n\n**Start Early:**\n• First visit: By age 1 or first tooth\n• Brush as soon as first tooth appears\n• Use rice-sized fluoride toothpaste\n\n**Ages 0-3:**\n• Parent does all brushing\n• Avoid bottle at bedtime\n\n**Ages 3-6:**\n• Pea-sized toothpaste\n• Parent supervises brushing\n\n**Regular Checkups:**\nEvery 6 months ($120). We offer family-friendly care!`;
  }

  // Default
  return `I'd be happy to help! I can assist with:\n\n• Service pricing and booking\n• Dental pain management\n• Oral hygiene tips\n• Preventive care guidance\n• Treatment information\n• Emergency advice\n\nCould you please be more specific about your dental concern? For example, you can ask about prices, tooth pain, cavity prevention, or booking appointments.`;
}

export default AIMessageAssistant;
