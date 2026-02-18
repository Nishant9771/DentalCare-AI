import { ChevronRightIcon } from "lucide-react";

const PROGRESS_STEPS = ["Select Dentist", "Choose Time", "Confirm"];

function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {PROGRESS_STEPS.map((stepName, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep >= stepNumber;

        return (
          <div key={stepNumber} className="flex items-center gap-2">
            {/* STEP CIRCLE */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                }`}
            >
              {stepNumber}
            </div>

            {/* STEP NAME */}
            <span
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {stepName}
            </span>

            {/* ARROW */}
            {stepNumber < PROGRESS_STEPS.length && (
              <ChevronRightIcon className="w-4 h-4 text-teal-400" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ProgressSteps;
