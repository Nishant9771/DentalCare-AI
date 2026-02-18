"use client";

import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 z-10 max-w-7xl mx-auto scroll-mt-20">
      {/* HEADER */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full border-2 border-teal-300/30 dark:border-teal-700/40 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 dark:from-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">
            Simple Process
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
          <span className="block bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Three steps to
          </span>
          <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            better dental health
          </span>
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Our streamlined process makes dental care accessible, convenient, and stress-free for everyone
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* STEP 1 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-900 dark:to-teal-950/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-teal-200/50 dark:border-teal-800/50 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2">
              {/* Step Number */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-base font-bold shadow-xl">
                1
              </div>

              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg">
                <Image src="/audio.png" alt="Voice Chat" width={48} height={48} className="w-16" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Ask Questions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6">
                Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and oral health tips.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-300 dark:border-teal-700">
                  24/7 Available
                </span>
                <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full border border-emerald-300 dark:border-emerald-700">
                  Instant Response
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2">
              {/* Step Number */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white text-base font-bold shadow-xl">
                2
              </div>

              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg">
                <Image src="/brain.png" alt="AI Brain" width={48} height={48} className="w-16" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Get Expert Advice</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6">
                Receive personalized recommendations based on thousands of dental cases. Our AI provides professional-grade insights.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full border border-emerald-300 dark:border-emerald-700">
                  AI-Powered
                </span>
                <span className="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-300 dark:border-teal-700">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3  */}
          <div className="relative group">
            <div className="relative bg-gradient-to-br from-white to-cyan-50/30 dark:from-gray-900 dark:to-cyan-950/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              {/* Step Number */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center text-white text-base font-bold shadow-xl">
                3
              </div>

              {/* Icon */}
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg">
                <Image src="/calendar.png" alt="Calendar" width={48} height={48} className="w-16" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Book & Get Care</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-6">
                Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold rounded-full border border-cyan-300 dark:border-cyan-700">
                  Verified Doctors
                </span>
                <span className="px-3 py-1.5 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold rounded-full border border-teal-300 dark:border-teal-700">
                  Follow-up Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 hover:from-teal-700 hover:via-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <ArrowRightIcon className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
