"use client";

import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

function VapiWidget() {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user, isLoaded } = useUser();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  // auto-scroll for messages
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // setup event listeners for VAPI
  useEffect(() => {
    const handleCallStart = () => {
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };

    const handleCallEnd = () => {
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };

    const handleSpeechStart = () => setIsSpeaking(true);
    const handleSpeechEnd = () => setIsSpeaking(false);

    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [
          ...prev,
          { content: message.transcript, role: message.role },
        ]);
      }
    };

    const handleError = () => {
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    if (callActive) vapi.stop();
    else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);
        await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
      } catch {
        setConnecting(false);
      }
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col overflow-hidden pb-20">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">
          <span className="text-gray-900 dark:text-white">Talk to Your </span>
          <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent uppercase">
            AI Dental Assistant
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Have a voice conversation with our AI assistant for dental advice and guidance
        </p>
      </div>

      {/* VIDEO AREA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* AI CARD */}
        <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 overflow-hidden relative shadow-lg">
          <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
            {/* VOICE WAVE */}
            <div
              className={`absolute inset-0 ${
                isSpeaking ? "opacity-30" : "opacity-0"
              } transition-opacity duration-300`}
            >
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center h-20">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`mx-1 w-1 rounded-full bg-teal-500 ${
                      isSpeaking ? "animate-sound-wave" : ""
                    }`}
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      height: isSpeaking ? `${Math.random() * 50 + 20}%` : "5%",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* AI AVATAR */}
            <div className="relative size-32 mb-4">
              <div
                className={`absolute inset-0 bg-teal-500/20 rounded-full blur-xl ${
                  isSpeaking ? "animate-pulse" : ""
                }`}
              />
              <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 border border-teal-200/40 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="AI Dental Assistant"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              DentalCare AI
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dental Assistant
            </p>

            {/* STATUS */}
            <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full border border-teal-300/40 bg-white/70 dark:bg-gray-900/70">
              <div
                className={`w-2 h-2 rounded-full ${
                  isSpeaking ? "bg-teal-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {isSpeaking
                  ? "Speaking..."
                  : callActive
                  ? "Listening..."
                  : callEnded
                  ? "Call ended"
                  : "Waiting..."}
              </span>
            </div>
          </div>
        </Card>

        {/* USER CARD */}
        <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 overflow-hidden relative shadow-lg">
          <div className="aspect-video flex flex-col items-center justify-center p-6">
            <div className="relative size-32 mb-4">
              <Image
                src={user?.imageUrl!}
                alt="User"
                width={128}
                height={128}
                className="size-full object-cover rounded-full"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              You
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user
                ? `${user.firstName} ${user.lastName || ""}`.trim()
                : "Guest"}
            </p>

            <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full border bg-white/70 dark:bg-gray-900/70">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Ready
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* MESSAGES */}
      {messages.length > 0 && (
        <div
          ref={messageContainerRef}
          className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 rounded-xl p-4 mb-8 h-64 overflow-y-auto shadow-lg"
        >
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div key={index}>
                <div className="font-semibold text-xs text-gray-500 mb-1">
                  {msg.role === "assistant" ? "DentalCare AI" : "You"}:
                </div>
                <p className="text-gray-900 dark:text-white">
                  {msg.content}
                </p>
              </div>
            ))}

            {callEnded && (
              <div>
                <div className="font-semibold text-xs text-teal-600 mb-1">
                  System:
                </div>
                <p className="text-gray-900 dark:text-white">
                  Call ended. Thank you for using DentalCare AI!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CONTROLS */}
      <div className="flex justify-center">
        <Button
          className={`w-44 text-lg rounded-3xl text-white transition-all ${
            callActive
              ? "bg-red-500 hover:bg-red-600"
              : callEnded
              ? "bg-gray-400"
              : "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
          }`}
          onClick={toggleCall}
          disabled={connecting || callEnded}
        >
          {connecting
            ? "Connecting..."
            : callActive
            ? "End Call"
            : callEnded
            ? "Call Ended"
            : "Start Call"}
        </Button>
      </div>
    </div>
  );
}

export default VapiWidget;
