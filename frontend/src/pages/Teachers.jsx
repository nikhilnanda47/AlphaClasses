import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teachers = [
  {
    name: "Mr. R.K. Sharma",
    subject: "Mathematics",
    image: "/images/teacher1.jpg",
    bio: "15+ years of experience in CBSE & BSE Odisha board with a passion for simplifying complex concepts."
  },
  {
    name: "Ms. Ananya Mishra",
    subject: "Physics",
    image: "/images/teacher2.jpg",
    bio: "IIT graduate with interactive teaching style and strong results in board and competitive exams."
  },
  {
    name: "Mr. Debasis Nayak",
    subject: "Chemistry",
    image: "/images/teacher3.jpeg",
    bio: "Known for result-oriented preparation techniques and real-world examples in Chemistry."
  },
  {
    name: "Mr. R.K. Sharma",
    subject: "Mathematics",
    image: "/images/teacher5.avif",
    bio: "15+ years of experience in CBSE & BSE Odisha board with a passion for simplifying complex concepts."
  },
  {
    name: "Ms. Ananya Mishra",
    subject: "Physics",
    image: "/images/teacher7.jpg",
    bio: "IIT graduate with interactive teaching style and strong results in board and competitive exams."
  },
  {
    name: "Mr. Debasis Nayak",
    subject: "Chemistry",
    image: "/images/teacher8.jpg",
    bio: "Known for result-oriented preparation techniques and real-world examples in Chemistry."
  }
];

export default function Teachers() {
  return (
    <>
      <Navbar showActions={true} />
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6 py-12 text-white">
        <h1 className="text-4xl font-bold text-center mb-10">Meet Our Teachers</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-600 rounded-lg shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border border-gray-500"
              />
              <h2 className="text-xl font-semibold mb-1">{teacher.name}</h2>
              <p className="text-indigo-400 mb-2">{teacher.subject}</p>
              <p className="text-gray-300 text-sm">{teacher.bio}</p>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
      
    </>
  );
}