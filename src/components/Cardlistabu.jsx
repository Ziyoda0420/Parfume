import React, { useState } from "react";
import Card from "./Cardabu";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.jpg";

const Cardlistabu = () => {
  const [visible, setVisible] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("A-Z");
  const [selectedArticle, setSelectedArticle] = useState(null);


    const articles = [
  {
    title: "Finding Your Signature Scent",
    description: "Embark on a journey of self-discovery...",
    image: img1,
    category: "Tips",
  },
  {
    title: "The Art of Curating a Luxury Perfume Collection",
    description: "A luxury perfume collection is not just...",
    image: img2,
    category: "Luxury",
  },
  {
    title: "Decoding Fragrance Notes",
    description: "Discover top, middle, and base notes...",
    image: img3,
    category: "Education",
  },
  {
    title: "Lavender Perfumes",
    description: "Lavender with its enchanting aroma...",
    image: img4,
    category: "Nature",
  },
  {
    title: "History of Perfumery",
    description: "Embark on a journey through time...",
    image: img5,
    category: "History",
  },
  {
    title: "Rose Perfumes",
    description: "Rose, the queen of flowers...",
    image: img6,
    category: "Nature",
  },
  {
    title: "Citrus Scents",
    description: "Explore zesty scents that uplift..." , 
    image: img8,
    category: "Tips",
  },
  {
    title: "Mystical Oud",
    description: "Dive into the world of oud perfumes...",
    image: img7,
    category: "Luxury",
  },
  {
    title: "Layering Fragrances",
    description: "Learn how to personalize your scent...",
    image: img9,
    category: "Tips",
  },
];



  // 🔍 Поиск, фильтрация и сортировка
  const filteredArticles = articles
    .filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (article) =>
        selectedCategory === "All" || article.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "Z-A") {
        return b.title.localeCompare(a.title);
      } else {
        return 0;
      }
    });

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-40 justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 p-3 rounded-2xl bg-[#1a1a1a] text-white placeholder-gray-400 "
        />


        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 bg-[#1a1a1a] text-white rounded-2xl"
        >
          <option value="All">All Categories</option>
          <option value="Tips">Tips</option>
          <option value="Luxury">Luxury</option>
          <option value="Education">Education</option>
          <option value="Nature">Nature</option>
          <option value="History">History</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 bg-[#1a1a1a] text-white rounded-2xl"
        >
          <option value="A-Z">Sort A–Z</option>
          <option value="Z-A">Sort Z–A</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {filteredArticles.slice(0, visible).map((article) => (
          <Card
            key={article.title}
            {...article}
            onReadMore={() => setSelectedArticle(article)}
          />
        ))}
      </div>

      {visible < filteredArticles.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={handleLoadMore}
            className="bg-white text-black px-6 py-2 rounded-lg hover:bg-[#AB572D] transition duration-200"
          >
            Load More
          </button>
        </div>
      )}


      {filteredArticles.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No results found.</p>
      )}


      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] p-6 rounded-lg max-w-lg w-full text-white relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-gray-300">{selectedArticle.description}</p>
            <p className="mt-3 text-sm text-gray-400">
              Category: {selectedArticle.category}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Cardlistabu