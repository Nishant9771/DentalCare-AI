import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <BrainIcon className="size-5 text-teal-600" />
          Your Dental Health
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Keep track of your dental care journey
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/30 border border-teal-200/40">
            <div className="text-2xl font-bold text-teal-600 mb-1">
              {appointmentStats.completedAppointments}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed Visits
            </div>
          </div>

          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/30 border border-teal-200/40">
            <div className="text-2xl font-bold text-teal-600 mb-1">
              {appointmentStats.totalAppointments}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Appointments
            </div>
          </div>

          <div className="text-center p-4 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/30 border border-teal-200/40">
            <div className="text-2xl font-bold text-teal-600 mb-1">
              {format(new Date(user?.createdAt!), "MMM yyyy")}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Member Since
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-teal-100/60 via-emerald-100/40 to-cyan-100/40 dark:from-teal-950/40 dark:via-emerald-950/30 dark:to-cyan-950/20 border border-teal-300/30">
          <div className="flex items-start gap-4">
            <div className="size-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0 shadow-md">
              <MessageSquareIcon className="size-5 text-white" />
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">
                Ready to get started?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Book your first appointment or try our AI voice assistant for
                instant dental advice.
              </p>

              <div className="flex gap-3">
                <Link href="/voice">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-md"
                  >
                    Try AI Assistant
                  </Button>
                </Link>

                <Link href="/appointments">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-teal-400 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;
