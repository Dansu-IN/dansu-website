import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="font-serif text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl tracking-wide">DANSU</h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed">
          Jewellery that moves with you.
          Inspired by grace. Rooted in heritage. Designed with European elegance.
        </p>
        <button className="mt-10 px-10 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore Collections
        </button>
      </section>
      {/* … rest of App.jsx … */}
    </div>
  );
}
