import { Sidebar } from "./ui/Sidebar";
import { Topbar } from "./ui/Topbar";
import { StatsCards } from "./ui/StatsCards";
import { QuickActions } from "./ui/QuickActions";
import { ContinueStudying } from "./ui/ContinueStudying";
import { WeeklyProgressChart } from "./ui/WeeklyProgressChart";
import { getDashboardData } from "./logic";

export default async function DashboardPage() {
  const data = await getDashboardData();
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-900">
      <Sidebar active="dashboard" />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Topbar />
        <main className="flex-1 overflow-y-auto space-y-10 p-4 lg:px-8">
          <StatsCards stats={data.stats} />
          <button className="w-full rounded-xl bg-sky-600 py-4 text-lg font-medium text-white shadow hover:bg-purple-700">
            Choose Your Examination!!
          </button>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <QuickActions actions={data.actions as any} />
          <div className="grid gap-6 lg:grid-cols-2">
            <WeeklyProgressChart series={data.weekly} />
            <ContinueStudying list={[...data.continueStudying]} />
          </div>
        </main>
      </div>
    </div>
  );
}
