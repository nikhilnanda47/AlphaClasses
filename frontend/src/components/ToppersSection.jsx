import React from "react";
import { motion } from "framer-motion";

const toppers = [
  {
    name: "Anwesh Padhan",
    percentage: "97%",
    image: "/images/toppers/teacher1.jpg",
    rank: "🥇",
  },
  {
    name: "Abhipsa Sahu",
    percentage: "92%",
    image: "/images/toppers/teacher1.jpg",
    rank: "🥈",
  },
];

const others = [
  {
    name: "Tosobanta Sahu",
    percentage: "74%",
    image: "/images/toppers/teacher1.jpg",
  },
  {
    name: "Dinesh Meher",
    percentage: "72%",
    image: "/images/toppers/teacher2.jpg",
  },
  {
    name: "Ranapratap Bargee",
    percentage: "68%",
    image: "/images/toppers/teacher3.jpeg",
  },
  {
    name: "Khetrapal Gartia",
    percentage: "60.3%",
    image: "/images/toppers/teacher4.jpg",
  },
  {
    name: "Aditi Rout",
    percentage: "66.4%",
    image: "/images/toppers/teacher5.avif",
  },
  {
    name: "Manish Padhan",
    percentage: "60%",
    image: "/images/toppers/teacher6.avif",
  },
  {
    name: "Papu Sahu",
    percentage: "64.6%",
    image: "/images/toppers/teacher7.jpg",
  },
  {
    name: "Renuka Seth",
    percentage: "62%",
    image: "/images/toppers/teacher8.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function ToppersSection() {
  return (
    <div className="bg-[#0f172a] text-white px-6 py-14 border-t border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-4">
        🎉 Alpha Classes - Grade X CBSE Board Toppers (2024–2025)
      </h2>
      <p className="text-center text-gray-200 mb-6">
        📍 For Class 6th to +2 SCIENCE
      </p>

      <div className="max-w-4xl mx-auto text-gray-300 text-lg mb-10 text-center">
        <p>
          Total Students: <strong>21</strong>
        </p>
        <p>
          All Passed ✅ | Success Rate: <strong>100%</strong>
        </p>
        <p>
          Scored 90%+: <strong>2</strong> | Scored 60%+: <strong>11</strong>
        </p>
      </div>

      {/* Toppers */}
      <h3 className="text-2xl text-center font-semibold text-yellow-400 mb-4">
        🏆 Top Scorers
      </h3>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {toppers.map((student, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-lg shadow-xl w-64 border border-gray-700"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 mx-auto rounded-full border-2 border-yellow-400 mb-3 object-cover"
            />
            <p className="text-center text-xl font-semibold text-white mb-1">
              {student.rank} {student.name}
            </p>
            <p className="text-center text-indigo-400 text-lg font-medium">
              {student.percentage}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Others */}
      <h3 className="text-2xl text-center font-semibold text-blue-400 mb-6">
        📊 Other Students
      </h3>
      <div className="overflow-hidden">
        <div className="scroll-marquee gap-6">
          {[...others, ...others].map((student, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] p-4 mx-3 rounded-lg shadow-md text-center border border-gray-700 w-52 flex-shrink-0"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full border border-gray-600 mb-2 object-cover"
              />
              <p className="text-white font-medium">{student.name}</p>
              <p className="text-indigo-400 font-semibold">
                {student.percentage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
