import React, { useRef, useState } from 'react'
import Part1 from '../assets/Part 1.svg'
import Part2 from '../assets/Part 2.svg'
import Collection from '../assets/collection.svg'
import Man from '../assets/Men.svg'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

import img1 from "../assets/Group 5.svg";
import img2 from "../assets/Group 6.svg";
import img3 from "../assets/Group 7.svg";
import img4 from "../assets/Group 8.svg";

import Pick1 from '../assets/Pick 1.svg'
import Pick2 from '../assets/Pick 2.svg'
import Pick3 from '../assets/Pick 3.svg'
import Xum from '../assets/Xum.svg'
import { Link } from 'react-router-dom'
function Swipper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  // 
  const images = [
    { src: img1, route: "/product/1" },
    { src: img2, route: "/product/2" },
    { src: img3, route: "/product/3" },
    { src: img4, route: "/product/4" },
  ];
  const picks = [Pick1, Pick2, Pick3, Pick2];
  return (
    <div className=" relative  bg-[#000000]">
      <div className='flex text-white gap-60 ml-[100px]'>
        <div className='pt-[200px]'>
          <p className='text-[55px] font-light'>Elevate Your Spirit with <br /> Victory Scented Fragrances!</p>
          <p className='text-[19px] font-light pt-[20px] '>Shop now and embrace the sweet smell of victory <br /> with Local Face. </p>
          <button className='w-[120px] h-[50px] text-white rounded-2xl bg-amber-900  mt-[30px]'>Shop Now</button>
        </div>
        <div>
          <img src={Xum} alt="img" />
        </div>

      </div>
      <img src={Part1} alt="" className="w-full" />
      <img src={Part2} alt="" className="w-full" />
      <p className="text-[rgba(171,87,45,1)] text-[55px] justify-center flex mt-[70px]">
        Best selling products
      </p>


      <button
        ref={prevRef}
        className="absolute left-30 top-[2450px] -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <GrFormPrevious />
      </button>
      <button
        ref={nextRef}
        className="absolute right-45 top-[2450px] -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <MdOutlineNavigateNext />
      </button>


      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="max-w-5xl mx-auto px-4 gap mt-[80px]"
      >

        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex  ">
            <Link to={img.route}>
              <img src={img.src} alt={`Product ${index + 1}`} className="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <img className='mt-[100px] ml-[120px]' src={Collection} alt="" />


      <div
        className="relative mt-[100px] h-[600px] bg-no-repeat ml-[0px]  bg-center rounded-2xl overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${Man})` }}
      >

        <div className="absolute "></div>


        <div className="relative z-10 max-w-xl p-10 pt-[150px] ml-[100px]">
          <h1 className="text-5xl  mb-4 text-white">
            Perfume Year-End Sale!  </h1>
          <p className='text-5xl  mb-4 text-white'> Up to 50% OFF</p>
          <p className="text-gray-300 mb-6">
            Discover an exquisite collection of premium perfumes at unbelievable
            prices during our exclusive Perfume Sale!
          </p>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="bg-[rgba(171,87,45,1)] hover:bg-[rgba(171,87,45,0.8)] text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            {showInfo ? "Hide Info" : "Know More"}
          </button>


          {showInfo && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">About Our Perfumes</h2>
              <p className="text-gray-200 text-sm">
                Our perfumes are crafted from premium ingredients sourced
                worldwide. Each fragrance offers a unique blend of notes designed
                to leave a lasting impression. Shop now to experience elegance in
                every spray!
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="text-[rgba(171,87,45,1)] text-[55px] justify-center flex mt-[60px]">Latest Articles</p>

      <button
        ref={prevRef}
        className="absolute left-30 top-[5600px] -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <GrFormPrevious />
      </button>
      <button
        ref={nextRef}
        className="absolute right-30 top-[5600px] -translate-y-1/2 z-10 text-3xl p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
      >
        <MdOutlineNavigateNext />
      </button>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="max-w-5xl mx-auto px-4 gap mt-[80px]"
      >
        {picks.map((img, index) => (
          <SwiperSlide key={index} className="flex  ">
            <img src={img} alt={`Product ${index + 1}`} className="" />
            <p className='text-white text-[18px] mt-[20px]'>The Soothing Symphony of Lavender <br /> Perfumes:  Unlocking the Secrets of a <br /> Fragrant Elixir</p>
            <p className='text-white block pt-[20px]'>Lavender, with its enchanting aroma and rich history,
              has been cherished for centuries as a symbol of
              relaxation, healing, and timeless beauty. In the world
              of perfumery, lavender plays a key role in creating
              captivating fragrances loved by many.</p>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className=" hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition mt-[20px] border-2 border-white"
            >
              {showInfo ? "Hide Info" : "Read More"}
            </button>
            {showInfo && (
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">About Our Perfumes</h2>
                <p className="text-gray-200 text-sm">
                  Our perfumes are crafted from premium ingredients sourced
                  worldwide. Each fragrance offers a unique blend of notes designed
                  to leave a lasting impression. Shop now to experience elegance in
                  every spray!
                </p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipper;
