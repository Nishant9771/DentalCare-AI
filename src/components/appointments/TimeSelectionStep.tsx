import { useBookedTimeSlots } from "@/hooks/use-appointment";
import {
  APPOINTMENT_TYPES,
  getAvailableTimeSlots,
  getNext5Days,
} from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon, ClockIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface TimeSelectionStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onTypeChange: (type: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function TimeSelectionStep({
  onBack,
  onContinue,
  onDateChange,
  onTimeChange,
  onTypeChange,
  selectedDate,
  selectedDentistId,
  selectedTime,
  selectedType,
}: TimeSelectionStepProps) {
  const { data: bookedTimeSlots = [] } = useBookedTimeSlots(
    selectedDentistId,
    selectedDate
  );

  const availableDates = getNext5Days();
  const availableTimeSlots = getAvailableTimeSlots();

  const handleDateSelect = (date: string) => {
    onDateChange(date);
    onTimeChange("");
  };

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
          Select Date & Time
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* APPOINTMENT TYPE */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Appointment Type
          </h3>

          <div className="space-y-3">
            {APPOINTMENT_TYPES.map((type) => (
              <Card
                key={type.id}
                onClick={() => onTypeChange(type.id)}
                className={`cursor-pointer transition-all backdrop-blur-xl
                  ${
                    selectedType === type.id
                      ? "border-teal-500 ring-2 ring-teal-500/40 bg-teal-50/60 dark:bg-teal-950/30"
                      : "border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 hover:border-teal-400/60"
                  }`}
              >
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {type.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {type.duration}
                    </p>
                  </div>

                  <span className="font-semibold text-teal-600">
                    {type.price}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Available Dates
          </h3>

          {/* DATE PICKER */}
          <div className="grid grid-cols-2 gap-3">
            {availableDates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                onClick={() => handleDateSelect(date)}
                className={`h-auto p-3 transition-all
                  ${
                    selectedDate === date
                      ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
                      : "border-teal-300 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950"
                  }`}
              >
                <div className="text-center font-medium">
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </Button>
            ))}
          </div>

          {/* TIME PICKER */}
          {selectedDate && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Available Times
              </h4>

              <div className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((time) => {
                  const isBooked = bookedTimeSlots.includes(time);

                  return (
                    <Button
                      key={time}
                      size="sm"
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => !isBooked && onTimeChange(time)}
                      disabled={isBooked}
                      className={`transition-all
                        ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white"
                            : "border-teal-300 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950"
                        }
                        ${isBooked ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {time}
                      {isBooked && " (Booked)"}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CONTINUE */}
      {selectedType && selectedDate && selectedTime && (
        <div className="flex justify-end pt-4">
          <Button
            onClick={onContinue}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            Review Booking
          </Button>
        </div>
      )}
    </div>
  );
}

export default TimeSelectionStep;
