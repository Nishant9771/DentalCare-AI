import DentalHealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";

function ActivityOverview() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Dental Health Card */}
      <div className="lg:col-span-2">
        <DentalHealthOverview />
      </div>

      {/* Next Appointment Card */}
      <div>
        <NextAppointment />
      </div>
    </div>
  );
}

export default ActivityOverview;
