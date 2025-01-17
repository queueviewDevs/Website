import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#ffc107]'>QUEUE VIEW.</h1>
      <ul className='whitespace-nowrap hidden md:flex'>
        <li className='p-4'>
          <a href='#' onClick={() => setActiveTab("liveview")}>Live View</a>
        </li>
        <li className='p-4'>
          <a href='#' onClick={() => setActiveTab("about")}>About Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
