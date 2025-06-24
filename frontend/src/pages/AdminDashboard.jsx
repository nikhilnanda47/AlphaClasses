import React from "react";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <>
      <Navbar showActions={true} />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to the Admin Dashboard!
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          You are now logged in as an admin.
        </p>
      </div>
    </>
  );
}
