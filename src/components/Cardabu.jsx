// import React from 'react'

// const Cardabu = ({ title, description, image, onReadMore }) => {
//   return (
//     <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md">
//       <img src={image} alt={title} className="w-full h-56 object-cover" />
//       <div className="p-4 text-white">
//         <h2 className="text-lg font-semibold mb-2">{title}</h2>
//         <p className="text-sm mb-4">
//           {description.length > 60
//             ? description.substring(0, 60) + "..."
//             : description}
    

//         </p>
//         <button
//           onClick={onReadMore}
//           className="border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black  duration-500"
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Cardabu
const Cardabu = ({ title, description = "", image, onReadMore }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 text-white">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm mb-4">
          {description.length > 60
            ? description.substring(0, 60) + "..."
            : description}
        </p>
        <button
          onClick={onReadMore}
          className="border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black duration-500"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
export default Cardabu;