import React from 'react';
import profilePic from './images/profile.jpg'

const Card = () => {
  return ( 
    <>
    <div className='grid grid-cols-12'>
      {/* left Sidebar */}
      <div className='bg-white opacity-70 border-r-2 border-gray-300 shadow-lg col-span-3 h-[575px]'>
        <div className='flex justify-center'>
          <img className='mt-14 rounded-full w-[100px] h-[110px] opacity-none' src={profilePic} alt="Profile" />
        </div>
        <h1 className='text-center mt-4 text-xl font-bold opacity-none'>John Niyontwali</h1>
        <p className='text-center text-sm font-bold opacity-none'>Software Developer</p>
      </div>
      {/* right Sidebar */}
      <div className='bg-white opacity-5 col-span-9'>
        Hello too
      </div>
    </div>
      
    </>
   );
}
 
export default Card;