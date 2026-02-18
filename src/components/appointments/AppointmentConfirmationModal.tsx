import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  MailIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  };
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
}: AppointmentConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 rounded-2xl shadow-2xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/10 shadow-md">
            <CheckCircleIcon className="h-8 w-8 text-teal-600" />
          </div>

          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
            Appointment Confirmed!
          </DialogTitle>

          <DialogDescription className="text-gray-600 dark:text-gray-400 text-center">
            Your appointment has been successfully booked
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* EMAIL INFO */}
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/email-sent.png"
              alt="Email sent"
              width={120}
              height={120}
              className="mx-auto"
            />

            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-teal-600">
                <MailIcon className="h-4 w-4" />
                Details sent to your inbox
              </div>

              {appointmentDetails?.userEmail && (
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {appointmentDetails.userEmail}
                </p>
              )}
            </div>
          </div>

          {/* SUMMARY */}
          {appointmentDetails && (
            <div className="bg-teal-50/60 dark:bg-teal-950/30 rounded-xl p-4 space-y-3 border border-teal-200/40 dark:border-teal-800/40">
              <h4 className="font-medium text-sm text-center text-gray-900 dark:text-white mb-3">
                Quick Summary
              </h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <UserIcon className="h-4 w-4 text-teal-500" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {appointmentDetails.doctorName}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CalendarIcon className="h-4 w-4 text-teal-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {appointmentDetails.appointmentDate}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="h-4 w-4 text-teal-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {appointmentDetails.appointmentTime}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex flex-col gap-3">
            <Link href="/appointments" className="w-full">
              <Button
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg"
                onClick={() => onOpenChange(false)}
              >
                View My Appointments
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full border-teal-300 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>

          {/* FOOTNOTE */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 border-t border-teal-200/40 dark:border-teal-800/40 pt-4">
            <p>
              Please arrive 15 minutes early for your appointment.
              <br />
              Need to reschedule? Contact us 24 hours in advance.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
