import { useAvailableDoctors } from "@/hooks/use-doctors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DoctorCardsLoading } from "./DoctorCardsLoading";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function DoctorSelectionStep({
  onContinue,
  onSelectDentist,
  selectedDentistId,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Choose Your Dentist
        </h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Choose Your Dentist
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => {
          const isSelected = selectedDentistId === dentist.id;

          return (
            <Card
              key={dentist.id}
              onClick={() => onSelectDentist(dentist.id)}
              className={`cursor-pointer transition-all backdrop-blur-xl
                ${
                  isSelected
                    ? "border-teal-500 ring-2 ring-teal-500/40 bg-teal-50/60 dark:bg-teal-950/30 shadow-lg"
                    : "border-teal-200/40 dark:border-teal-800/40 bg-white/70 dark:bg-gray-900/70 hover:border-teal-400/60 hover:shadow-lg"
                }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Image
                    src={dentist.imageUrl!}
                    alt={dentist.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover border border-teal-200/40"
                  />

                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      {dentist.name}
                    </CardTitle>

                    <CardDescription className="text-teal-600 font-medium">
                      {dentist.speciality || "General Dentistry"}
                    </CardDescription>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          5
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ({dentist.appointmentCount} appointments)
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPinIcon className="w-4 h-4 text-teal-500" />
                  <span>DentalCare</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <PhoneIcon className="w-4 h-4 text-teal-500" />
                  <span>{dentist.phone}</span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {dentist.bio ||
                    "Experienced dental professional providing quality care."}
                </p>

                <Badge
                  variant="secondary"
                  className="bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
                >
                  Licensed Professional
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {selectedDentistId && (
        <div className="flex justify-end pt-2">
          <Button
            onClick={onContinue}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg"
          >
            Continue to Time Selection
          </Button>
        </div>
      )}
    </div>
  );
}

export default DoctorSelectionStep;
