"use client"
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg'
import { HassanLogo } from '../../assets/images';
import SubComponent from './SubComponent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      
      {/* <CgMenuGridR 
        className="w-14 ml-[95%] mt-6 bg-gray-300 hover:bg-gray-200 active:bg-green-600 flex justify-center py-2 h-10 rounded-l-lg cursor-pointer"
        title="Open Menu"
        onClick={toggleMenu} /> */}
          <CgMenuGridR size={32}
        className="absolute top-6 right-2 text-white hover:bg-gray-400 active:bg-green-400 "
        title="Open Menu"
        onClick={toggleMenu} />
          
      
      <div
        className={`fixed top-0 bottom-0 z-auto lg:right-0 w-80 transition-all duration-500 ease-in-out overflow-y-auto text-center bg-slate-200 ${
          isMenuOpen ? 'translate-x-0 visible ' : 'translate-x-full invisible '
        }`}
      >
        <div className="text-gray-100 text-xl">
          <div className="mt-[-30px] flex items-center">
            <div className="text-xl">
              <HassanLogo />
            </div>
            <AiOutlineClose className="cursor-pointer text-pink-600 ml-10 " onClick={toggleMenu} />
          </div>
          <div className='border border-solid border-pink-400 my-2 mt-[-22px] ' ></div>
        </div>

      <SubComponent />
    </div>
         </div>
  )
}
export default Navbar;




{/* <div className='left-0 right-0 bottom-0 top-0 absolute bg-black/70 ' ></div> */}