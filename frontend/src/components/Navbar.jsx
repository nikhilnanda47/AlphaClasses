import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar({ showActions = true }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0f172a] border-b border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
        >
          <img
            src={logo}
            alt="AlphaClasses Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-semibold text-white">
            AlphaClasses
          </span>
        </Link>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        {showActions && (
          <div className="hidden md:flex space-x-4">
            <Link
              to="/batches"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Explore Batches
            </Link>
            <Link
              to="/teachers"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Our Teachers
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      {isOpen && showActions && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link
            to="/batches"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-indigo-400"
          >
            Explore Batches
          </Link>
          <Link
            to="/teachers"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-indigo-400"
          >
            Our Teachers
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-indigo-400"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-indigo-400"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
