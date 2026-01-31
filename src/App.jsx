import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="font-serif text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl tracking-wide">DANSU</h1>
        <p className="mt-6 text-xl max-w-2xl leading-relaxed">
          Jewellery that moves with you. Inspired by grace. Rooted in heritage. Designed with European elegance.
        </p>
        <button className="mt-10 px-10 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Explore Collections
        </button>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-10">The Story of Dansu</h2>
          <p className="text-lg leading-loose">
            Dansu was never created as a business. It was born as an expression of a lifelong love for fine jewellery, aesthetics, and timeless grace.
          </p>
        </div>
      </section>
    </div>
  );
}
