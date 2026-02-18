import { getUserAppointments } from "@/lib/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointments from "./NoNextAppointments";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

async function NextAppointment() {
  const appointments = await getUserAppointments();

  // filter for upcoming CONFIRMED appointments only (today or future)
  const upcomingAppointments =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isUpcoming && appointment.status === "CONFIRMED";
    }) || [];

  // get the next appointment (earliest upcoming one)
  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />;

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate, "EEEE, MMMM d, yyyy");
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <Card className="border border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <CalendarIcon className="size-5 text-teal-600" />
          Next Appointment
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* STATUS BADGE */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-300/40 bg-gradient-to-r from-teal-100/60 to-emerald-100/40 dark:from-teal-950/40 dark:to-emerald-950/30">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-teal-700 dark:text-teal-300">
              {isToday ? "Today" : "Upcoming"}
            </span>
          </div>

          <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            {nextAppointment.status}
          </span>
        </div>

        {/* DETAILS */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-lg flex items-center justify-center">
              <UserIcon className="size-4 text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900 dark:text-white">
                {nextAppointment.doctorName}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {nextAppointment.reason}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-lg flex items-center justify-center">
              <CalendarIcon className="size-4 text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900 dark:text-white">
                {formattedDate}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {isToday ? "Today" : format(appointmentDate, "EEEE")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500/20 to-emerald-500/10 rounded-lg flex items-center justify-center">
              <ClockIcon className="size-4 text-teal-600" />
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900 dark:text-white">
                {nextAppointment.time}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Local time
              </p>
            </div>
          </div>
        </div>

        {/* MORE COUNT */}
        {upcomingAppointments.length > 1 && (
          <p className="text-xs text-center text-gray-600 dark:text-gray-400 pt-2">
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? "s" : ""}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default NextAppointment;
