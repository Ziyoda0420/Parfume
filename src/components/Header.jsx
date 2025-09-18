import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdPeople } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";


import Face from '../assets/Face.svg'
import Xum from '../assets/Xum.svg'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className='bg-[#000000]'>
      <div>
        <nav className='flex '>
          <img src={Face} alt="img" className='pl-[100px]' />

          <ul className="flex gap-20 list-none p-5 m-5 text-white pl-[250px]">
            <Link to='/'> <li className='hover:text-amber-500'>Home</li></Link>
            <Link to='/ansor'> <li className='hover:text-amber-500 cursor-pointer'>Shop</li></Link>
            
            <Link
              to="/shahri"
              className="hover:text-amber-500"
            >
              About Us
            </Link>
             <Link to="/services"><li className='hover:text-amber-500 cursor-pointer'>Service</li></Link>

            
            <Link to="/osnovaabu"><li className='hover:text-amber-500 cursor-pointer'>Blog</li></Link>

            {/* <li><Link  to={'/'} >Home </Link></li>
      <li><Link  to={'/about'} >Add New Books </Link></li>
      <li><Link  to={'/book'} >Books </Link></li> */}


          </ul>
          <div className='flex text-white text-3xl gap-5 pt-[40px] ml-[70px] '>
            <CiSearch />
            <IoMdPeople />
            <FaRegHeart />
            <FaShoppingBag />



          </div>
        </nav>
        {/* <div className='flex text-white gap-60 ml-[100px]'>
          <div className='pt-[200px]'>
            <p className='text-[55px] font-light'>Elevate Your Spirit with <br /> Victory Scented Fragrances!</p>
            <p className='text-[19px] font-light pt-[20px] '>Shop now and embrace the sweet smell of victory <br /> with Local Face. </p>
            <button className='w-[120px] h-[50px] text-white rounded-2xl bg-amber-900  mt-[30px]'>Shop Now</button>
          </div>
          <div>
            <img src={Xum} alt="img" />
          </div>

        </div> */}

      </div>
    </div>
  )
}

export default Header