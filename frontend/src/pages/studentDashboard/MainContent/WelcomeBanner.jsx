export default function WelcomeBanner() {
  const studentName = localStorage.getItem("name") || "Student";

  return (
    <div className="bg-blue-600 text-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-1">Hi, {studentName} 👋</h2>
      <p className="text-sm">
        Welcome back to AlphaClasses! Let’s continue your learning journey today.
      </p>
    </div>
  );
}
