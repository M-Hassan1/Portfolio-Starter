"use client"
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';
import { HassanLogo } from '../../assets/images';
import SubComponent from './SubComponent';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`fixed top-0 bottom-0 right-0 w-80 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-slate-200 text-gray-100 text-xl h-full rounded-l-xl p-4">
          <div className="mt-[-30px] flex items-center justify-between">
            <div className="text-2xl">
              <HassanLogo />
            </div>
            <AiOutlineClose
              size={25}
              className="cursor-pointer text-pink-600"
              onClick={toggleMenu}
            />
          </div>
          <hr className="border border-solid border-pink-400 my-2 mt-[-40px]" />
          <SubComponent />
        </div>
      </div>

      <CgMenuGridR
        size={32}
        className={`fixed top-6 right-2 text-white hover:bg-gray-400 active:bg-green-400 ${
          isMenuOpen ? 'hidden' : 'block'
        }`}
        title="Open Menu"
        onClick={toggleMenu}

      />
      
    </div>
  );
};

export default Navbar;



