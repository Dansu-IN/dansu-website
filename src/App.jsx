import React from "react";

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

      {/* STORY */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-10">The Story of Dansu</h2>
          <p className="text-lg leading-loose">
            Dansu was never created as a business. It was born as an expression
            of a lifelong love for fine jewellery, aesthetics, and timeless grace.
            Born amidst the heritage and stories of a Zamindar home in Varanasi,
            and trained with the precision of a Chartered Accountant, the founder
            always gravitated towards the elegance of European design.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl mb-8">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="h-64 bg-gray-200 rounded-2xl shadow-md"></div>
          <h3 className="mt-4 text-xl">Earrings</h3>
          <div className="h-64 bg-gray-200 rounded-2xl shadow-md"></div>
          <h3 className="mt-4 text-xl">Pendants</h3>
          <div className="h-64 bg-gray-200 rounded-2xl shadow-md"></div>
          <h3 className="mt-4 text-xl">Bracelets</h3>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-black text-white">
        <p>© {new Date().getFullYear()} Dansu Jewellery. All rights reserved.</p>
      </footer>

    </div>
  );
}
