import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axiosInstance from "../api/axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "STUDENT", // default for now
      };

      const res = await axiosInstance.post("/auth/signup", payload);

      alert("Signup successful! You can now login.");
      console.log("Signup response:", res.data);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <>
      <Navbar showActions={false} />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl px-8 py-6 w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo} alt="AlphaClasses Logo" className="h-20" />
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
            Create Your Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-blue-700 shadow-xl transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Log in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
