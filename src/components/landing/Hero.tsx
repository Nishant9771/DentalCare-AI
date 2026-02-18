"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, StarIcon, Sparkles } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50/30 to-cyan-50/50 dark:from-gray-950 dark:via-teal-950/20 dark:to-emerald-950/10">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a6_1px,transparent_1px),linear-gradient(to_bottom,#14b8a6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10"></div>
        
        {/* Floating Dots */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-teal-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-500 rounded-full animate-pulse opacity-30 [animation-delay:1s]"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse opacity-40 [animation-delay:2s]"></div>
      </div>

      {/* LARGE GRADIENT ORBS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-400/20 via-emerald-400/10 to-transparent rounded-full blur-3xl animate-pulse [animation-duration:4s]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-400/15 via-teal-400/10 to-transparent rounded-full blur-3xl animate-pulse [animation-duration:5s] [animation-delay:1s]" />

      <div className="relative z-10 w-full px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* PREMIUM BADGE */}
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-cyan-500/10 rounded-full border-2 border-teal-300/30 dark:border-teal-700/40 backdrop-blur-sm shadow-lg">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-teal-500 rounded-full animate-ping"></div>
                  </div>
                  <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 dark:from-teal-300 dark:to-emerald-300 bg-clip-text text-transparent">
                    AI-Powered Dental Care Platform
                  </span>
                </div>

                {/* MAIN HEADING - Large & Bold */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1]">
                  <span className="block bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                    Smile with
                  </span>
                  <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradient_3s_ease_infinite]">
                    DentalCare AI
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300 text-4xl md:text-5xl lg:text-6xl mt-2">
                    24/7 Assistance
                  </span>
                </h1>

                {/* SUBTITLE - Enhanced */}
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
                  Experience the future of dental care with our intelligent AI assistant. 
                  <span className="text-teal-600 dark:text-teal-400 font-semibold"> Instant answers</span>, 
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> smart bookings</span>, and 
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> personalized care</span> — all in one place.
                </p>
              </div>

              {/* CTA BUTTONS - Premium Style */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button 
                    size="lg" 
                    className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 hover:from-teal-700 hover:via-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <MicIcon className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Try Voice Assistant
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="h-14 px-8 text-lg font-semibold border-2 border-teal-300 dark:border-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950 hover:border-teal-400 text-teal-700 dark:text-teal-300 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <CalendarIcon className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* TRUST INDICATORS - Enhanced */}
              <div className="pt-8">
                <div className="flex items-center gap-8">
                  {/* USER AVATARS */}
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                    ].map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt={`Happy patient ${i + 1}`}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-white dark:ring-gray-950 shadow-lg"
                      />
                    ))}
                  </div>

                  {/* RATING AND STATS */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <StarIcon 
                            key={star} 
                            className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-sm" 
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">4.9/5</span>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      Trusted by{" "}
                      <span className="font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                        2,500+ happy patients
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT - HERO IMAGE WITH EFFECTS */}
            <div className="relative lg:pl-8">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-emerald-400/20 rounded-3xl rotate-12 blur-2xl animate-pulse [animation-duration:3s]"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-cyan-400/20 to-teal-400/30 rounded-full blur-2xl animate-pulse [animation-duration:4s] [animation-delay:1s]"></div>
              
              {/* Image Container with Border */}
              <div className="relative p-2 bg-gradient-to-br from-teal-200 via-emerald-200 to-cyan-200 dark:from-teal-900 dark:via-emerald-900 dark:to-cyan-900 rounded-3xl shadow-2xl">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-inner">
                  <Image
                    src="/hero.png"
                    alt="DentalCare AI Assistant"
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 border-2 border-teal-200 dark:border-teal-800 animate-bounce [animation-duration:3s]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">AI Powered</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">24/7 Available</p>
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

export default Hero;
