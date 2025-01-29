import RecentActivities from "../components/RecentActivities";

export default function Dashboard() {
  return (
    <>
      <div className="bg-custom_bg h-screen">
        {/* Top buttons */}
        <div className="flex flex-row w-full gap-10 mt-5 justify-center">
          <button className="w-52 border-none shadow-gray-400 h-24 pb-4 shadow-sm rounded-2xl flex-col flex items-center gap-1.5 justify-between py-2.5">
            <div className="text-sm font-bold text-slate-600">Total Leads</div>
            <div className="text-3xl font-bold">2,976</div>
          </button>
          <button className="w-52 border-none shadow-gray-400 h-24 pb-4 shadow-sm rounded-2xl flex-col flex items-center gap-1.5 justify-between py-2.5">
            <div className="text-sm font-bold text-slate-600">
              Conversion Rate
            </div>
            <div className="text-3xl font-bold">32.8%</div>
          </button>
          <button className="w-52 border-none shadow-gray-400 h-24 pb-4 shadow-sm rounded-2xl flex-col flex items-center gap-1.5 justify-between py-2.5">
            <div className="text-sm font-bold text-slate-600">
              Upcoming Follow-Ups
            </div>
            <div className="text-3xl font-bold">30</div>
          </button>
          <button className="w-52 border-none shadow-gray-400 h-24 pb-4 shadow-sm rounded-2xl flex-col flex items-center gap-1.5 justify-between py-2.5">
            <div className="text-sm font-bold text-slate-600">
              Pending Actions
            </div>
            <div className="text-3xl font-bold">18</div>
          </button>
        </div>

        {/* See All Button */}

        {/* Recent Activities Section */}
        <div className="mx-20 mt-28 bg-white shadow-lg">
          <RecentActivities />
        </div>
      </div>
    </>
  );
}
