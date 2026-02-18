import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div className="relative z-10 flex items-center justify-between rounded-3xl p-8 mb-12 overflow-hidden
      bg-gradient-to-br from-teal-100/60 via-emerald-100/40 to-cyan-100/40
      dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-cyan-950/20
      border border-teal-300/30 backdrop-blur-xl shadow-lg"
    >
      {/* LEFT */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full
          bg-gradient-to-r from-teal-500/15 to-emerald-500/15
          border border-teal-300/40"
        >
          <div className="size-2 bg-teal-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
            Online & Ready
          </span>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            Your personal AI dental assistant is ready to help you maintain
            perfect oral health.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:flex hidden items-center justify-center size-32 rounded-full
        bg-gradient-to-br from-teal-500/20 to-emerald-500/10 shadow-inner"
      >
        <Image
          src="/logo.png"
          alt="DentalCare AI"
          width={64}
          height={64}
          className="w-16 h-16"
          priority
        />
      </div>
    </div>
  );
}
