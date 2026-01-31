import React from "react";

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
            Raised amidst the heritage and stories of an old zamindar home in Varanasi, and trained with the precision of a Chartered Accountant, the founder of Dansu always found herself drawn to the elegance of European jewellery houses — where design feels artistic, powerful, and feminine at once.
            The name <strong>Dansu</strong> is inspired by the art of movement — a celebration of grace, rhythm, and the way jewellery does not merely sit on a woman, but moves with her, like a dance.
            Each piece at Dansu reflects that philosophy: luxurious finishing, high‑quality craftsmanship, and designs inspired by iconic European styles, thoughtfully made accessible for the modern Indian woman.
          </p>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-24 px-6">
        <h2 className="text-3xl text-center mb-16">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { title: "Earrings" },
            { title: "Pendants" },
            { title: "Bracelets" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="h-72 bg-gray-200 rounded-2xl shadow-md"></div>
              <h3 className="mt-8 text-xl tracking-wide">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-10">Our Philosophy</h2>
          <p className="text-lg leading-loose">
            At Dansu, jewellery is not an accessory. It is an extension of identity.
            Designed for women who appreciate heritage, elegance, and quiet luxury, our pieces are crafted to evoke the feeling of wearing something timeless — something that tells a story without saying a word.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center bg-black text-white">
        <p>© {new Date().getFullYear()} Dansu Jewellery. All rights reserved.</p>
      </footer>

    </div>
  );
}
