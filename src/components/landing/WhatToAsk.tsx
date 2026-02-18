"use client";

import { MessageSquareIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WhatToAsk() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50/40 to-cyan-50/50 dark:from-gray-950 dark:via-teal-950/20 dark:to-emerald-950/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-teal-300/40 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 backdrop-blur mb-6">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-teal-500 rounded-full animate-ping" />
            </div>
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
              About DentalCare AI
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="block text-gray-900 dark:text-white">
              What you can
            </span>
            <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              ask our AI
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            DentalCare AI answers real-world dental questions instantly using
            advanced AI trained on thousands of dental cases.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-10">
            {[
              {
                q: "My tooth hurts when I bite down",
                d: "Understand pain causes, immediate relief steps, and when to see a dentist.",
              },
              {
                q: "How much does teeth whitening cost?",
                d: "Compare treatment options, expected pricing, and results.",
              },
              {
                q: "When should I replace my filling?",
                d: "Learn warning signs, filling lifespan, and maintenance advice.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 border border-teal-200/40 shadow-lg hover:border-teal-400/60 transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center">
                    <MessageSquareIcon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-teal-700 dark:text-teal-300">
                      “{item.q}”
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {item.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border border-teal-200/40 shadow-xl">
            <Image
              src="/confused.png"
              alt="Dental AI Assistant"
              width={500}
              height={500}
              className="w-full max-w-lg h-auto object-contain mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
