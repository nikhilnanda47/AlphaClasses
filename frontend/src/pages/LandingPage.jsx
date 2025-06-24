import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import CarouselSection from "../components/CarouselSection";
import HowToReachSection from "../components/HowToReachSection";
import Footer from "../components/Footer";
import ToppersSection from "../components/ToppersSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col font-sans">
      {/* Navbar */}
      <Navbar showActions={true} />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Affordable, Quality Coaching for Classes 6–12
        </motion.h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
          Join AlphaClasses — Bijepur’s trusted coaching center — where
          experienced teachers help you master all subjects in one
          place, at prices every family can afford.
        </p>
        <div className="mt-6">
          <motion.div
            whileHover={{
              rotate: [0, -5, 5, -5, 5, 0],
              transition: { duration: 0.8 },
            }}
          >
            <Link
              to="/batches"
              className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl transition duration-300"
            >
              Explore Now!
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sections with Scroll Animations */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ToppersSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CarouselSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] py-12 border-t border-gray-700"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10 text-white">
            What Makes AlphaClasses Unique?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-[#0f172a] border border-gray-700 hover:shadow-md">
              <div className="text-4xl mb-2">👩‍🏫</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Experienced Teachers
              </h3>
              <p className="text-gray-400">
                Our passionate local educators bring deep subject knowledge and
                personal guidance.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-[#0f172a] border border-gray-700 hover:shadow-md">
              <div className="text-4xl mb-2">📘</div>
              <h3 className="font-bold text-lg mb-2 text-white">All Subjects Covered</h3>
              <p className="text-gray-400">Get comprehensive coaching in Math, Science, English, and more — designed to boost understanding and academic confidence.</p>
            </div>
            <div className="p-6 rounded-lg bg-[#0f172a] border border-gray-700 hover:shadow-md">
              <div className="text-4xl mb-2">🏠</div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Local & Affordable
              </h3>
              <p className="text-gray-400">
                Located in Bijepur, we’re committed to providing top-quality
                coaching at a price you can afford.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Existing Student Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#1e293b] py-10 px-6 text-center border-t border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">
          Already our student?
        </h2>
        <p className="text-gray-300 mb-4">
          Login here to access your Dashboard and track your performance.
        </p>
        <Link
          to="/login"
          className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md shadow-sm transition-colors duration-200"
        >
          Login to Dashboard
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HowToReachSection />
      </motion.div>

      

      {/* Footer */}
      <Footer />
      <footer className="bg-[#0f172a] text-center py-6 border-t border-gray-700 mt-auto">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AlphaClasses, Bijepur. Empowering
          Students in Bargarh District.
        </p>
      </footer>
    </div>
  );
}
