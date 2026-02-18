import Navbar from "@/components/Navbar";
import VapiWidget from "@/components/voice/VapiWidget";
import AIMessageAssistant from "@/components/voice/AIMessageAssistant";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MicIcon, MessageSquareIcon } from "lucide-react";

async function VoicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50/40 to-cyan-50/40 dark:from-gray-950 dark:via-teal-950/20 dark:to-emerald-950/10">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 pt-28">
        {/* PAGE HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">
              Talk to Your{" "}
            </span>
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              AI Dental Assistant
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Choose how you'd like to interact with Riley — speak naturally with
            voice, or chat comfortably using text.
          </p>
        </div>

        {/* TABS */}
        <Tabs defaultValue="message" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 rounded-xl shadow-lg">
              <TabsTrigger
                value="message"
                className="flex items-center gap-2 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-lg"
              >
                <MessageSquareIcon className="w-5 h-5" />
                <span>AI Message Assistant</span>
              </TabsTrigger>

              <TabsTrigger
                value="voice"
                className="flex items-center gap-2 text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-lg"
              >
                <MicIcon className="w-5 h-5" />
                <span>Voice Assistant</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* MESSAGE ASSISTANT */}
          <TabsContent value="message" className="mt-0">
            <AIMessageAssistant />
          </TabsContent>

          {/* VOICE ASSISTANT */}
          <TabsContent value="voice" className="mt-0">
            <VapiWidget />
          </TabsContent>
        </Tabs>

        {/* FEATURE HIGHLIGHTS */}
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* MESSAGE */}
          <div className="p-6 rounded-2xl border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-lg">
                <MessageSquareIcon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                AI Message Assistant
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Text-based chat interface",
                "Perfect for quiet environments",
                "Save and review conversation history",
                "Quick response time",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VOICE */}
          <div className="p-6 rounded-2xl border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-lg">
                <MicIcon className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Voice Assistant
              </h3>
            </div>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              {[
                "Natural voice conversations",
                "Hands-free interaction",
                "Real-time voice responses",
                "More personal experience",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoicePage;
