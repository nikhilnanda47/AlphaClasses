import { useState } from "react";
import logo from "../assets/logo.png";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
        role,
      });

      const { token, role: userRole, name } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);
      localStorage.setItem("name", name);

      if (userRole === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/student-dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <>
      <Navbar showActions={false} />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl px-8 py-6 w-full max-w-md">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="AlphaClasses Logo" className="h-24" />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Please Login here!
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Login as
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600"
              >
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-blue-700 shadow-xl transition duration-300"
              >
                Log In
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              New to AlphaClasses?{" "}
              <Link to="/signup" className="text-indigo-500 hover:underline">
                Sign up here
              </Link>
            </p>
          </form>

          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox rounded text-indigo-600"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-indigo-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
