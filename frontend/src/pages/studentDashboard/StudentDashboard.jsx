import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { Outlet } from "react-router-dom";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col bg-gray-100 overflow-y-auto">
        <TopHeader />
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
