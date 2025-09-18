import React from 'react'

const Loadmoreabu = ({ onClick }) => (
  <div className="text-center mt-6">
    <button
      onClick={onClick}
      className="bg-[#a2562f] text-white px-6 py-3 rounded hover:bg-[#8a4424] transition"
    >
      Load More
    </button>
  </div>
);

export default Loadmoreabu