import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/10 blur-sm" />
        <Image
          src={doctor.imageUrl!}
          alt={doctor.name}
          width={48}
          height={48}
          className="relative w-12 h-12 rounded-full object-cover border border-teal-200/40"
        />
      </div>

      <div>
        <h3 className="font-medium text-gray-900 dark:text-white">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {doctor.speciality || "General Dentistry"}
        </p>
      </div>
    </div>
  );
}

export default DoctorInfo;
