import React, { useEffect, useState } from "react";
import Fon from "../assets/fon.png";
import One from "../assets/one.png"
import Two from "../assets/two.png"
export default function PerfumeBlog() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((res) => res.json())
      .then((item) => setData(item)) 
      .catch((err) => console.error("Ошибка загрузки posts:", err));

  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <nav className="w-full max-w-4xl px-4 py-3 text-sm text-gray-400">
        Home / Blog / The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories
      </nav>

      <div className="text-center mt-6">
        <p className="text-gray-400">January 5, 2023</p>
        <p className="text-gray-400">Perfume Collections</p>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold">
          The Art of Curating a Luxury Perfume Collection: <br />
          A Symphony of Scents and Stories
        </h1>
      </div>

      <div className="mt-8 w-full max-w-4xl px-4">
        <img src={Fon} alt="Perfume Blog Banner" />
      </div>
    <main>
        <div className="flex flex-col gap-6 p-10">
          <p>
            Welcome, fragrance aficionados, to an exquisite journey into the captivating world of luxury perfume collections. A symphony of scents awaits as we delve into the art of curating a fragrance collection that reflects your essence, evokes cherished memories, and embraces the finest olfactory masterpieces. Just as a maestro conducts an orchestra, we invite you to become the conductor of your very own perfume symphony.
          </p>

        <div>
            <h5 className="text-lg font-semibold">The Perfume Collection: A Personal Overture</h5>
            <p className="mt-5">A perfume collection is more than an assortment of fragrances; it is a reflection of your personality, your life's chapters, and the emotions that define you. As you embark on this aromatic voyage, consider what scents resonate with your soul, whisking you away to cherished moments and uncharted dreams. Each fragrance in your collection will tell a unique story, narrated by the notes that gracefully dance upon your skin.</p>
        </div>

        <div className="flex justify-between mt-8">
            <img src={One} alt=""  className="w-100 h-80"/>
            <div>
            <div className="ml-6">
                <h5>The Overture: Discovering Your Signature Scent</h5>
                <p className="mt-5">The journey to curating a luxury perfume collection begins with finding your signature scent—the one that feels like an olfactory extension of your being. Take time to explore different fragrance families, from opulent florals to mysterious orientals, to discover the notes that harmonize perfectly with your skin chemistry. This will be the foundation upon which you build your enchanting symphony of scents.</p>
            </div>
        
            <div className="mt-8 ml-6">
                <h5>Commemorating Milestones</h5>
                <p className="mt-4">Just as the notes of a melody create beautiful harmonies, certain fragrances can encapsulate significant moments in your life. Whether it's a celebration of love, a momentous achievement, or a cherished memory with a loved one, select perfumes that become olfactory milestones. With each spritz, you'll be transported back in time, reliving the emotions that weave your life's narrative.</p>
            </div>
            </div>
        </div>   

        <div className="mt-5">
            <h2 className="font-bold">Exploring the Fragrance Palette</h2>
            <p className="mt-4">As you continue composing your collection, it's essential to explore a diverse fragrance palette. Include scents that embody contrasting moods and evoke emotions ranging from serenity to exuberance. From the freshness of citrusy top notes to the warm embrace of rich base notes, each perfume adds a unique hue to your olfactory canvas.</p>
        </div>

        <div className="mt-5">
            <h2 className="font-bold">Embracing Niche Gems</h2>
            <p className="mt-4">Just as a symphony benefits from unique instruments, your collection can be enriched by the discovery of niche perfumes and artisanal creations. Venture beyond the mainstream, and explore the creations of master perfumers who pour their heart and soul into crafting distinctive scents. These hidden gems add an air of exclusivity to your olfactory repertoire.</p>
        </div>
        
        <div className="flex gap-5">
          <div className=" justify-between mt-8">
          <h5 className="font-bold">Perfume as an Art Form</h5>
          <p className="mt-5">Perfume is not merely a product; it is an art form that captivates the senses and transcends time. Take a moment to appreciate the artistry behind each perfume, the skill of the perfumer in blending notes, and the emotions they convey through fragrance. Embrace the poetry in each bottle, and your collection will become an ode to the beauty of scent.</p>
          
          <h5 className="font-bold">Displaying Your Symphony of Scents</h5>
          <p className="mt-5">The grand finale of your perfume symphony lies in the elegant presentation of your collection. A tastefully curated display showcases the artistry of perfume bottles, transforming your collection into an aesthetic marvel. Whether nestled on a vintage vanity or arranged in a custom-made perfume cabinet, your fragrant ensemble becomes an exquisite visual and olfactory experience.</p>
          </div>
          
          <img src={Two} alt="" className="w-100 h-80 mr-6"/>
        </div>
        <div>
          <p>Happy curating!</p>
          <p>Kiara Smith</p>
        </div>

       
          

          {data && (
            <div className="p-4 border border-gray-700 rounded-lg">
              <p><strong>ID:</strong> {data.id}</p>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Bio:</strong> {data.bio}</p>
             </div>
         )}
        </div>
    </main>
        </div>
  );
}
