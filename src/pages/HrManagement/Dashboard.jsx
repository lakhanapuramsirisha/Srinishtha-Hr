// import Header from "../components/Header";
import DashboardCard from "../../components/DashboardCard";

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* <Header /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <DashboardCard
          icon="👥"
          title="Employee Directory"
          description="Access and manage your team members' information"
          footer="54 Employees"
        />
        <DashboardCard
          icon="➕"
          title="Onboarding & Exit"
          description="Manage onboarding and offboarding"
          footer="3 In Progress"
        />
        <DashboardCard
          icon="📅"
          title="Attendance Tracker"
          description="Monitor team attendance and time tracking"
          footer="92% This Week"
        />
        <DashboardCard
          icon="📈"
          title="Performance Tracking"
          description="Track and evaluate performance"
          footer="38 Reviews"
        />
      </div>
    </div>
  );
}
