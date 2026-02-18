"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MicIcon, Sparkles } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50/40 to-cyan-50/50 dark:from-gray-950 dark:via-teal-950/20 dark:to-emerald-950/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      {/* ORBS */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-teal-300/40 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 backdrop-blur">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-teal-500 rounded-full animate-ping" />
              </div>
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
                Start Your Dental AI Journey
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block text-gray-900 dark:text-white">
                Smarter Dental Care
              </span>
              <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Begins Right Now
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Get instant AI guidance, voice-based assistance, and seamless appointment booking —
              trusted by thousands of happy patients.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-xl transition-all group"
                >
                  <MicIcon className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Start Free AI Chat
                </Button>
              </SignUpButton>

              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-semibold border-2 border-teal-300 hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950 text-teal-700 dark:text-teal-300 shadow-lg transition-all group"
                >
                  <CalendarIcon className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Book Appointment
                </Button>
              </SignUpButton>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* IMAGE GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-2xl rounded-3xl scale-110" />

              <div className="relative p-2 bg-gradient-to-br from-teal-200 via-emerald-200 to-cyan-200 dark:from-teal-900 dark:via-emerald-900 dark:to-cyan-900 rounded-3xl shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-4">
                  <Image
                    src="/cta.png"
                    alt="Dental AI Assistant"
                    width={420}
                    height={420}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>

              {/* FLOATING BADGE */}
              <div className="absolute -bottom-6 left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border border-teal-200 dark:border-teal-800 animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                      AI Powered
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
