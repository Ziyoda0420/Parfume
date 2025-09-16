import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#000000] pt-[50px]">
    <footer className="bg-gradient-to-r from-black via-[#111] to-black text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
       
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">Local Face</h2>
          <p className="mb-4">
            Subscribe to Our Newsletter:
          </p>
          <p className="text-sm mb-4">
            Receive Updates on New Arrivals and Special Promotions!
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Your email here"
              className="px-4 py-2 w-full rounded-l-md bg-[#1a1a1a] text-gray-200 focus:outline-none"
            />
            <button className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 transition">
              Submit
            </button>
          </div>
         
          <div className="flex space-x-4 text-xl text-white">
            <a href="#"><FaTwitter className="hover:text-orange-500 transition" /></a>
            <a href="#"><FaFacebookF className="hover:text-orange-500 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-orange-500 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-orange-500 transition" /></a>
          </div>
        </div>

      
        <div>
          <h3 className="font-semibold text-white mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Indoor</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Shopping</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Payments</a></li>
            <li><a href="#">Delivery options</a></li>
            <li><a href="#">Buyer protection</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Customer care</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Returns & refund</a></li>
            <li><a href="#">Survey & feedback</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-white mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Local Face. All rights reserved.
      </div>
    </footer>
    </div>
  );
}

export default Footer;
