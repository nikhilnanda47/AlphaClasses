import { Link } from "react-router-dom";
import { Book, Calendar, FileText, User, Bell, LogOut, MessageCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1e293b] text-white flex flex-col px-4 py-6 space-y-6">
      <h2 className="text-xl font-bold text-center mb-4">📚 AlphaClasses</h2>
      <nav className="space-y-3">
        <Link to="/student-dashboard" className="block hover:text-indigo-400">🏠 Dashboard</Link>
        <Link to="#" className="block hover:text-indigo-400">📅 Class Schedule</Link>
        <Link to="#" className="block hover:text-indigo-400">📂 Materials</Link>
        <Link to="#" className="block hover:text-indigo-400">📊 Results</Link>
        <Link to="#" className="block hover:text-indigo-400">📋 Attendance</Link>
        <Link to="#" className="block hover:text-indigo-400">📢 Announcements</Link>
        <Link to="#" className="block hover:text-indigo-400">❓ Ask Doubt</Link>
        <Link to="/login" className="block text-red-400 hover:text-red-500">🚪 Logout</Link>
      </nav>
    </div>
  );
}
