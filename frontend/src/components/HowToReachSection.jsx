// src/components/HowToReachSection.jsx
import React from "react";

export default function HowToReachSection() {
  return (
    <div className="bg-[#1e293b] py-12 px-6 border-t border-gray-700">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        How to Reach AlphaClasses
      </h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-6">
        We are located in the heart of Bijepur, Bargarh — easily accessible via local transport. Come visit us to see how we’re helping students succeed every day!
      </p>
      <div className="flex justify-center">
        <iframe
          title="AlphaClasses Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1860.0228116057453!2d83.4488681!3d21.1903465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a26b1d2a7fb56db%3A0x43c38bba69b1c0a5!2sAlpha%20classes!5e0!3m2!1sen!2sin!4v1750675133144!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full max-w-7xl border border-gray-600 shadow-xl"

        ></iframe>
      </div>
    </div>
  );
}
