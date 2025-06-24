import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const batches = [
  {
    class: "Class 6",
    subjects: ["Math", "Science", "English"],
    timing: "9:00 AM - 11:00 AM"
  },
  {
    class: "Class 7",
    subjects: ["Math", "Science", "English"],
    timing: "11:30 AM - 1:30 PM"
  },
  {
    class: "Class 8",
    subjects: ["Math", "Science", "English"],
    timing: "2:00 PM - 4:00 PM"
  },
  {
    class: "Class 9",
    subjects: ["Math", "Science", "English", "SST"],
    timing: "4:30 PM - 6:30 PM"
  },
  {
    class: "Class 10",
    subjects: ["Math", "Science", "English", "SST"],
    timing: "6:45 PM - 8:45 PM"
  },
  {
    class: "+1 Science",
    subjects: ["Physics", "Chemistry", "Math/Biology", "English"],
    timing: "7:00 AM - 9:00 AM"
  },
  {
    class: "+2 Science",
    subjects: ["Physics", "Chemistry", "Math/Biology", "English"],
    timing: "9:15 AM - 11:15 AM"
  }
];

export default function OurBatches() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />

      <div className="px-6 py-14">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
          📚 Our Batches (2024–2025)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {batches.map((batch, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg p-6 shadow-xl border border-gray-700 bg-[#1e293b] transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] hover:border-indigo-400"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {batch.class}
              </h3>
              <p className="text-gray-400 mb-1">
                <strong>Subjects:</strong> {batch.subjects.join(", ")}
              </p>
              <p className="text-gray-400">
                <strong>Timing:</strong> {batch.timing}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}