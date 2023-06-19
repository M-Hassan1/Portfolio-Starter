

"use client"


// import { MainLogo } from "@/src/components/assets/images";

// import { HomeLogo } from '@/src/components/assets/images';
// import { useEffect, useRef } from 'react';
// import { AiOutlineMail } from 'react-icons/ai';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Typed from 'typed.js';


// const Main = () => {

//     const typedRef = useRef(null);

//     useEffect(() => {
//         const typed = new Typed(typedRef.current, {
      
//             strings: ['Front-End-Developer','Youtuber', 'Graphic Designer'],
//         typeSpeed: 150,
//         backSpeed: 100,
//         backDelay: 100,
//         // showCursor: true,
//         loop: true,
//         cursorChar: '|'
//       });
  
//       return () => {
//         typed.destroy();
//       };
//     }, []);

//   return (

// <div className="w-full pt-32">
//   <div className="absolute top-[-78px] " >
// <MainLogo />
//   </div>
// <hr className=' border-soli border-2 mt-[-52px] border-pink-400 mb-20 ' ></hr>
//   <div className="max-w-[1240px] grid grid-cols-2 w-full mx-auto p-4 ">
//     <div>
//       {/* <p className="uppercase font-serif text-sm md:text-md tracking-widest text-lime-600">
//         I Create Advanced websites and apps
//       </p> */}
//       <h2 className="py-2 text-2xl md:text-3xl font-serif text-gray-500">
//         Hi! I am <span className="text-blue-500 ">M Hassan</span>
//       </h2>
//       <p className="text-lg md:text-xl py-2 text-green-700">
//         <span ref={typedRef}></span>
//       </p>
//       <span>
//         <p className="py-4 font-serif">
//         As a Front-End Developer, I develop websites using cutting-edge technologies, ensuring their seamless functionality and captivating user interfaces.
//         </p>
//       </span>
//       <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
//         <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
//           <FaLinkedin />
//         </div>
//         <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
//           <FaGithub />
//         </div>
//         {/* <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
//           <AiOutlineMail />
//         </div> */}
//         <div className="rounded-full shadow-[0px_1px_1px_2px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-[1.2] ease-in duration-300">
//           <BsFillPersonLinesFill />
//         </div>
//       </div>
//     </div>
//     <div className="flex justify-center items-center">
//   <HomeLogo />
//   </div>

//   </div>
  
// </div>
//   )
// }

// export default Main;







// // "use client"

// import { MainLogo } from "@/src/components/assets/images";

// // import { HomeLogo } from '@/src/components/assets/images';


// const Main = () => {

//   return(
//     <div className="w-full pt-32">
//       <div className="grid gap-4 grid-cols-2 " >
//       <div  className=" mt-[-50%]" >
//       <MainLogo /></div>
//       <div className="" ><button>Download Cv</button></div>
//       </div>
//     </div>



//   )


// }


// export default Main;






// const Main = () => {
//   return (
//     <div className="w-full pt-32">
//       <div className="grid gap-4 grid-cols-2">
//         <div className="mt-[-50%]">
//           <MainLogo />
//         </div>
//         {/* <div className="mt-[-20%] bg-blue-400  w-2 h-4 " >
//           <button>Download Cv</button> */}
//           {/* </div>         */}
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Download Cv</button>
//       </div>
//     </div>
//   );
// }

// export default Main;




// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header className="flex items-center justify-between p-4">
//       <div className="flex items-center">
//         <span className="text-lg font-bold"><MainLogo /></span>
//       </div>
//       <a
//         href="cv.pdf"
//         download
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Download CV
//       </a>
//     </header>
//   );
// };

// export default Header;



// import  HomeLogo  from '@/src/components/assets/images/MainPageLog.png';
// import Image from 'next/image';

// import React from 'react';

// const Main = () => {
//   return (
//     <div className="grid grid-cols-2 items-center  p-4">
//       <div className="flex items-center ">
        
//         <div className="">
//           <Image src={HomeLogo} alt='Logo Image' />
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <a
//           href="cv.pdf"
//           download
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
         
//           Download CV
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React from 'react';
import HomeLogo from '@/src/components/assets/images/MainPageLog.png';
import Link from 'next/link';
import { HomePageLogo } from '@/src/components/assets/images';

const Main = () => {
  return (
    <div className="grid grid-cols-2 items-center p-4">
      <Link href='/'><HomePageLogo /></Link>
      <div className="flex justify-end">
  <a
    href="cv.pdf"
    download
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:w-auto"
  >
    Download CV
  </a>
</div>

    </div>
  );
};

export default Main;

