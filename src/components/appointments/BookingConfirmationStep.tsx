import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find(
    (t) => t.id === selectedType
  );

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950"
        >
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Confirm Your Appointment
        </h2>
      </div>

      {/* SUMMARY CARD */}
      <Card className="max-w-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-teal-200/40 dark:border-teal-800/40 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">
            Appointment Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* DOCTOR */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* DETAILS */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-teal-200/40 dark:border-teal-800/40">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Appointment Type
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {appointmentType?.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Duration
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {appointmentType?.duration}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Date
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Time
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                {selectedTime}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Location
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                Dental Center
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cost
              </p>
              <p className="font-medium text-teal-600">
                {appointmentType?.price}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ACTIONS */}
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={onModify}
          className="border-teal-300 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950"
        >
          Modify Appointment
        </Button>

        <Button
          onClick={onConfirm}
          disabled={isBooking}
          className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg"
        >
          {isBooking ? "Booking..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
}

export default BookingConfirmationStep;
