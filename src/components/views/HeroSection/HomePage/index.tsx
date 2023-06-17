"use client"
import { HomeLogo } from '@/src/components/assets/images';
import { useEffect, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Typed from 'typed.js';

const Main = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Front-End Developer', 'Youtuber', 'Graphic Designer'],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full pt-32 text-center">
      <div className="max-w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto p-4">
        <div>
          <p className="uppercase font-serif text-sm md:text-md tracking-widest text-lime-600">
            I Create Advanced websites and apps
          </p>
          <h2 className="py-2 text-4xl md:text-5xl font-serif text-gray-500">
            Hi! I am <span className="text-blue-400 font-bold">M Hassan</span>
          </h2>
          <p className="text-lg md:text-2xl py-2 text-green-700">
            <span ref={typedRef}></span>
          </p>
          <span>
            <p className="py-4 font-serif">
              My Name Is Muhammad Hassan. I am a Student of National University of Sciences and Technology (NUST) Islamabad. I am a Front-End Developer, Youtuber, and Graphic Designer.
            </p>
          </span>
          <div className="flex items-center justify-center md:justify-start max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <HomeLogo />
        </div>
      </div>
    </div>
  );
};

export default Main
