import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import Teachers from "./pages/Teachers";
import Batches from "./pages/Batches";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import PrivateRoute from "./components/PrivateRoute";

// Sub-components for each dashboard tab
import ClassSchedule from "./pages/studentDashboard/MainContent/TodaysClassSchedule";
import Materials from "./pages/studentDashboard/Materials";
import Results from "./pages/studentDashboard/Results";
import Attendance from "./pages/studentDashboard/Attendance";
import Announcements from "./pages/studentDashboard/Announcements";
import AskDoubt from "./pages/studentDashboard/AskDoubt";
import Settings from "./pages/studentDashboard/Settings";
import DashboardHome from "./pages/studentDashboard/MainContent"; // default dashboard view

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* Student Dashboard with nested routes */}
          <Route path="/student-dashboard" element={<StudentDashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="schedule" element={<ClassSchedule />} />
            <Route path="materials" element={<Materials />} />
            <Route path="results" element={<Results />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="ask-doubt" element={<AskDoubt />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
