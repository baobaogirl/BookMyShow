import React from 'react'
import logo from '../../images/logo.png'
import { Search, ChevronDown,CircleUserRound  } from 'lucide-react';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <>
     <div className='bg-white h-16 w-full px-[100px] flex gap-6 items-center justify-between'>
      <Link to="/">
        <img
          className="cursor-pointer w-[115px] h-[50px]"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className=' border border-gray-400 h-9 w-[500px] bg-white mt-1.5 rounded-sm px-1.5 items-center flex gap-1.5'>
        <Search className='cursor-pointer' size={24} color="gray"   />
        <input className=" focus:outline-none w-[400px]" type="text" placeholder="Search for Movies, Events, Plays, Sports, and Activities" />
      </div>
      <div className='flex ml-[250px] gap-8 cursor-pointer'>
        <div className='flex gap-3'>
          <span className='text-[#1a1a1a]'>Chandigarh</span>
          <ChevronDown className='mt-1.5 cursor-pointer' size={16} color='gray' />
        </div>
        <div className='flex gap-3 items-center'>
            <CircleUserRound size={30} color='gray'/>
            <Link to="/signin" className="hover:text-red-600 transition">
    Hi, Guest
  </Link>
        </div>
      </div>
    </div>

    <div className='w-[full] h-[40px] bg-[#F5F5F5] flex px-[100px] justify-between'>

      <div className='flex cursor-pointer items-center gap-6 text-sm text-[#323232] w-[850px]'>
          <span>Movies</span>
          <span>Streams</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
      </div>
      <div className='flex cursor-pointer items-center gap-5 text-sm text-[#323232]'>
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
      </div>
    </div>
  </>
   
  )
}

export default Navbar
