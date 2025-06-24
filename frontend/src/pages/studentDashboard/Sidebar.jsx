import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/student-dashboard" },
    { name: "Class Schedule", path: "/student-dashboard/schedule" },
    { name: "Materials", path: "/student-dashboard/materials" },
    { name: "Results", path: "/student-dashboard/results" },
    { name: "Attendance", path: "/student-dashboard/attendance" },
    { name: "Announcements", path: "/student-dashboard/announcements" },
    { name: "Ask Doubt", path: "/student-dashboard/ask-doubt" },
    { name: "Settings", path: "/student-dashboard/settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <>
      {/* Hamburger menu for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#0f172a] text-white p-2 rounded"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f172a] text-white py-6 px-4 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <h2 className="text-xl font-bold mb-8 text-center">AlphaClasses</h2>

        <nav className="space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-lg transition-all ${
                location.pathname === item.path
                  ? "bg-blue-600 font-semibold"
                  : "hover:bg-blue-800"
              }`}
              onClick={() => setIsOpen(false)} // Close on selection (mobile)
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 mt-10 text-sm text-red-400 hover:text-red-600"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>
    </>
  );
}
