"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-3 border-b-2 border-teal-200/50 dark:border-teal-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO & BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            {/* Logo */}
            <Image 
              src="/logo.png" 
              alt="DentalCare AI Logo" 
              width={44} 
              height={44} 
              className="w-11 h-11 relative z-10 group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <div>
            <span className="font-black text-xl bg-gradient-to-r from-teal-700 via-emerald-700 to-cyan-700 dark:from-teal-300 dark:via-emerald-300 dark:to-cyan-300 bg-clip-text text-transparent">
              DentalCare AI
            </span>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-teal-500" />
              <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Smart Dental Platform
              </span>
            </div>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            How it Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors duration-200 relative group cursor-pointer"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-3">
          <SignInButton mode="modal">
            <Button 
              variant="ghost" 
              size="sm"
              className="font-semibold text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950"
            >
              Login
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button 
              size="sm"
              className="font-semibold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
