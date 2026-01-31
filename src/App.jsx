import React from "react";

export default function App() {
  return (
    <div className="font-serif text-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
        <h1 className="text-6xl font-semibold tracking-wide">DANSU</h1>
        <p className="mt-6 text-xl max-w-2xl">
          European design. Timeless elegance. Crafted for the woman who carries legacy with grace.
        </p>
        <button className="mt-8 px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Shop Collection
        </button>
      </section>

      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Story</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          Dansu was never meant to be a business. It was always meant to be an expression.
          Born from a lifelong love for fine jewellery and heritage aesthetics,
          Dansu brings European design language to India through high-quality craftsmanship
          and timeless grace.
        </p>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Earrings", "Pendants", "Bracelets"].map((item, index) => (
            <div key={index} className="text-center">
              <div className="h-64 bg-gray-200 rounded-2xl shadow-md"></div>
              <h3 className="mt-6 text-xl">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center bg-black text-white">
        <p>© {new Date().getFullYear()} Dansu Jewellery. All rights reserved.</p>
      </footer>
    </div>
  );
}