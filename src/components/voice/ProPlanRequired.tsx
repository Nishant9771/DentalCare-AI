import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CrownIcon, LockIcon, MicIcon } from "lucide-react";
import Link from "next/link";

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50/40 to-cyan-50/40 dark:from-gray-950 dark:via-teal-950/20 dark:to-emerald-950/10">
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 pt-28">
        {/* ACCESS DENIED / INFO */}
        <div className="relative mb-14 overflow-hidden">
          <div className="bg-gradient-to-br from-teal-100/60 via-emerald-100/40 to-cyan-100/40 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-cyan-950/20 rounded-3xl p-8 border border-teal-300/30 backdrop-blur-xl shadow-lg">
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-300/40 bg-gradient-to-r from-teal-500/15 to-emerald-500/15">
                  <LockIcon className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
                    Pro Feature
                  </span>
                </div>

                <div>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    Voice Assistant Access Required
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice
                    consultations with our AI dental assistant.
                  </p>
                </div>
              </div>

              {/* ICON */}
              <div className="hidden lg:flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/10 shadow-inner">
                <MicIcon className="w-16 h-16 text-teal-600" />
              </div>
            </div>
          </div>
        </div>

        {/* UPGRADE CARD */}
        <Card className="relative overflow-hidden group transition-all duration-300 border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-xl max-w-2xl mx-auto hover:shadow-2xl hover:border-teal-400/60">
          <CardContent className="relative p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <LockIcon className="w-10 h-10 text-teal-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Upgrade Required
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The voice assistant feature is available to AI Pro and AI Basic
              subscribers. Get instant dental advice through natural voice
              conversations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "24/7 voice consultations",
                "Professional dental guidance",
                "Instant pain relief advice",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 justify-center"
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/pro">
              <Button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;
