import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function NoNextAppointments() {
  return (
    <Card className="border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <CalendarIcon className="size-5 text-teal-600" />
          Next Appointment
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-950/40 dark:to-emerald-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
            <CalendarIcon className="size-8 text-teal-500 opacity-80" />
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            No upcoming appointments
          </p>

          <Link href="/appointments">
            <Button
              size="sm"
              variant="outline"
              className="w-full border-teal-400 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950 font-semibold"
            >
              Schedule Your Next Visit
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default NoNextAppointments;
