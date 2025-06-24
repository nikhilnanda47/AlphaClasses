import { Bell, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopHeader({ toggleSidebar }) {
  const navigate = useNavigate();
  const studentName = localStorage.getItem("name") || "Student";
  const profilePhoto = "https://i.pravatar.cc/40?img=12";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Left: Menu toggle + Name */}
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome back, {studentName}!
        </h1>
      </div>

      {/* Right: Notification, Avatar, Logout */}
      <div className="flex items-center gap-6">
        <button className="relative hover:text-blue-600">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-white text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <img
          src={profilePhoto}
          alt="Student Profile"
          className="w-10 h-10 rounded-full border"
        />
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}