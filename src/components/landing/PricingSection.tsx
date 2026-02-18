"use client";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
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
            <div className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-pulse" />
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="block text-gray-900 dark:text-white">
              Choose your
            </span>
            <span className="block bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Dental AI Plan
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
            Start free. Upgrade anytime for AI-powered dental care.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* FREE */}
          <PricingCard
            title="Free"
            price="$0"
            description="Basic appointment booking"
            button={
              <SignUpButton mode="modal">
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                  Get Started Free
                </Button>
              </SignUpButton>
            }
            features={[
              "Unlimited appointment booking",
              "Find dentists near you",
              "Basic AI text chat",
              "Appointment reminders",
            ]}
          />

          {/* AI BASIC */}
          <PricingCard
            featured
            title="AI Basic"
            price="$9"
            description="AI consultations + booking"
            button={
              <SignUpButton mode="modal">
                <Button className="w-full h-12 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 text-white shadow-xl">
                  Start AI Basic
                </Button>
              </SignUpButton>
            }
            features={[
              "Everything in Free",
              "10 AI voice calls / month",
              "AI dental guidance",
              "Symptom assessment",
              "Priority support",
              "Call history & recordings",
            ]}
          />

          {/* AI PRO */}
          <PricingCard
            title="AI Pro"
            price="$19"
            description="Unlimited AI dental care"
            button={
              <SignUpButton mode="modal">
                <Button
                  variant="outline"
                  className="w-full h-12 border-2 border-teal-400 text-teal-700"
                >
                  Upgrade to AI Pro
                </Button>
              </SignUpButton>
            }
            features={[
              "Everything in AI Basic",
              "Unlimited AI voice calls",
              "Advanced dental analysis",
              "Personalized care plans",
              "24/7 priority support",
              "Detailed health reports",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function PricingCard({
  title,
  price,
  description,
  button,
  features,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  button: React.ReactNode;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all
        ${
          featured
            ? "border-teal-400 shadow-2xl scale-105 bg-white dark:bg-gray-900"
            : "border-teal-200/40 bg-white/70 dark:bg-gray-900/70"
        }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-4xl font-black mt-2">{price}</p>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

      {button}

      <ul className="space-y-4 mt-8">
        {features.map((item, i) => (
          <li key={i} className="flex gap-3">
            <CheckCircleIcon className="w-5 h-5 text-teal-600" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
