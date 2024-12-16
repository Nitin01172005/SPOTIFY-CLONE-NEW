import React from 'react'
import {assets} from '../assets/assets'
import { GoHome } from "react-icons/go";
import { MdSearch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate();
  return (

    <div className='w-[25%] h-full flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-#121212 h-[15%] rounded flex flex-col  justify-around'>
        <div onClick={() => navigate("/")} className='flex gap-3 pl-8 cursor-pointer items-center'>
          <GoHome size={28} />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex gap-3 pl-8 cursor-pointer items-center'>
          <MdSearch size={28} />
          <p className='font-bold'>Search</p>
        </div>
    </div>
  
      <div className='bg-[#121212] h-[85%]  rounded'>
        <div className='flex p-4 items-center justify-between'>
          <div className='flex items-center gap-3 '>
            <img src={assets.stack_icon} className='w-8' alt="" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={assets.arrow_icon} className='w-5' alt="" />
            <img src={assets.plus_icon} className='w-5' alt="" />
          </div>
        </div>
        <div className='p-4 bg-[#282828] m-2 rounded font-semibold flex flex-col items-start justify-atart gap-1'>
          <h1 className=''>Create Your First playlist</h1>
          <p className='font-light'>It's easy we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#282828] m-2 rounded font-semibold flex flex-col items-start justify-atart gap-1 mt-4'>
          <h1 className=''>Let's find some Podcasts to follow</h1>
          <p className='font-light'>We will keep you update on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse Podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
