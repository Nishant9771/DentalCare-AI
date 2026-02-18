import { Card, CardContent } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { MessageSquareIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MainActions() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* AI Voice Assistant */}
      <Card className="relative overflow-hidden group transition-all duration-300 border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl hover:shadow-2xl hover:border-teal-400/60">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-emerald-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="relative p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Image
                src="/audio.png"
                alt="Voice AI"
                width={32}
                height={32}
                className="w-10"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                AI Voice Assistant
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get instant dental advice through voice calls
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "24/7 availability",
              "Professional dental guidance",
              "Instant pain relief advice",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/voice"
            className={buttonVariants({
              variant: "default",
              className:
                "w-full mt-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
            })}
          >
            <MessageSquareIcon className="mr-2 h-5 w-5" />
            Start Voice Call
          </Link>
        </CardContent>
      </Card>

      {/* Book Appointment */}
      <Card className="relative overflow-hidden group transition-all duration-300 border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl hover:shadow-2xl hover:border-teal-400/60">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-emerald-100/30 to-cyan-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="relative p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <Image
                src="/calendar.png"
                alt="Calendar"
                width={32}
                height={32}
                className="w-10"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Book Appointment
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Schedule with verified dentists in your area
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Verified dental professionals",
              "Flexible scheduling",
              "Instant confirmations",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full" />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link href="/appointments">
            <Button
              variant="outline"
              className="w-full mt-6 border-2 border-teal-400 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950 font-semibold py-3 rounded-xl transition-all duration-300"
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              Schedule Now
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
