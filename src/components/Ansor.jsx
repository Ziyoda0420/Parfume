import React, { useState } from "react";

const PRODUCTS_PER_PAGE = 8;

const productImages = [
  "/images/product-1.jpg.png",
  "/images/product-2.jpg.png",
  "/images/product-3.jpg.png",
  "/images/product-4.jpg.png",
  "/images/product-5.jpg.png",
  "/images/product-6.jpg.png",
  "/images/product-7.jpg.png",
  "/images/product-8.jpg.png",
  "/images/product-9.jpg.png",
  "/images/product-10.jpg.png",
  "/images/product-11.jpg.png",
  "/images/product-12.jpg.png",
  "/images/product-13.jpg.png",
  "/images/product-14.jpg.png",
];

const productNames = [
  "Luxurious Elixir Rough", "The Golden Legacy", "Luxurious Elixir", "Luxurious Essence",
  "Aurum Aura", "Gleaming Gift", "Gilded Elixir Rough", "Golden Luminary",
  "Decadent Opal", "Gilded Elixir", "Glamorous Gift", "Luxury Enigma",
  "Royal Amber", "Nocturne Mist"
];

const productPrices = [
  "$250.00", "$160.00", "$220.00", "$280.00",
  "$300.00", "$160.00", "$170.00", "$120.00",
  "$160.00", "$200.00", "$160.00", "$190.00",
  "$210.00", "$145.00"
];

const sampleProducts = productNames.map((name, i) => ({
  id: i + 1,
  name,
  price: productPrices[i],
  size: "100ml",
  rating: (i % 5) + 1,
  reviews: Math.floor(Math.random() * 300) + 20,
  img: productImages[i]
}));

function Stars({ n }) {
  return (
    <div className="text-yellow-400 text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function ProductCard({ p }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex flex-col items-center shadow-2xl">
      <div className="w-48 h-56 mb-3 bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden flex items-center justify-center">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-sm font-semibold text-center">{p.name}</h3>
      <Stars n={p.rating} />
      <p className="text-xs text-gray-400">{p.reviews} reviews</p>
      <p className="text-orange-400 font-bold mt-2">{p.price}</p>
      <p className="text-gray-400 text-xs">{p.size}</p>
    </div>
  );
}

export default function Ansor() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(sampleProducts.length / PRODUCTS_PER_PAGE);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = sampleProducts.slice(start, start + PRODUCTS_PER_PAGE);

  const aquaImg = "/images/1.png";
  const goldenImg = "/images/product-14.jpg.png";

  return (
    <div className="min-h-screen bg-black text-white pb-16">
      <header className="pt-8">
        <h1 className="text-center text-2xl font-bold text-orange-400">
          Best Selling Products
        </h1>
      </header>

      <main className="px-6 max-w-6xl mx-auto">
        
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {pageProducts.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </section>

        
        <div className="flex items-center justify-between mt-8">
          <div className="text-gray-400">Page {page} of {totalPages}</div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((s) => Math.max(1, s - 1))}
              className="p-2 rounded-full border border-gray-700 hover:bg-gray-800"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => setPage((s) => Math.min(totalPages, s + 1))}
              className="p-2 rounded-full border border-gray-700 hover:bg-gray-800"
              aria-label="Next"
            >
              → 
            </button>
          </div>
        </div>

        
        <h2 className="text-center text-2xl font-bold text-orange-400 py-8">
          Special Offers
        </h2>

        <div className="bg-gradient-to-r from-blue-900 to-black rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center md:items-stretch mb-8">
          <div className="md:w-1/2">
            <img
              src={aquaImg}
              alt="Aqua Serenity"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-300 mb-2">
              Limited Time Offer: <span className="font-bold">20% OFF</span>
            </p>
            <h2 className="text-3xl font-bold">Aqua Serenity</h2>
            <h3 className="text-lg text-cyan-400 mb-4">Embrace the Tranquil Tides</h3>
            <p className="text-gray-300 mb-6">
              Immerse yourself in the enchanting embrace of Aqua Serenity, a captivating fragrance that reflects the essence of calm waves.
            </p>
            <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition">
              Know More
            </button>
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-black to-yellow-900 rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center md:items-stretch">
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-300 mb-2">
              Limited Time Offer: <span className="font-bold">25% OFF</span>
            </p>
            <h2 className="text-3xl font-bold text-yellow-400">Golden Angel</h2>
            <h3 className="text-lg text-orange-400 mb-4">Unleash Your Divine Glow</h3>
            <p className="text-gray-300 mb-6">
              Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.
            </p>
            <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition">
              Know More
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src={goldenImg}
              alt="Golden Angel"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
