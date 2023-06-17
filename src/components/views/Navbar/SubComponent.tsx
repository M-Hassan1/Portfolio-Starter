import { FaHome, FaLaptopCode, FaMoon } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineAssignment, MdOutlineContactMail } from 'react-icons/md';
import Link from 'next/link';

const SubComponent = () => {
  return (
    <div>  
        <ul className="p-3 text-[20px] mt-[-22px] text-white items-center">
    <li className="py-3 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer">
      <Link href="/" className="gap-4 text text-amber-800 flex">
        <FaHome size={25} />
        Home
      </Link>
    </li>
    <li className="py-3 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer">
      <Link href="/" className="gap-4 text-[#044A3E] flex">
        <FcAbout size={25} />
        About
      </Link>
    </li>
    <li className="py-3 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer">
      <Link href="/" className="gap-4 text-[#8A79DE] flex">
        <FaLaptopCode size={25} />
        Skills
      </Link>
    </li>
    <li className="py-3 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer">
      <Link href="/" className="gap-4 flex text-pink-600">
        <MdOutlineAssignment size={25} />
        Projects
      </Link>
    </li>
    <li className="py-3 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer">
      <Link href="/" className="text-[#2F8197] gap-4 flex">
        <MdOutlineContactMail size={25} />Contact</Link>
 </li>
 
 </ul>
 <div className='border border-solid border-pink-400 my-2 ' ></div>
 <li className='py-3 ml-2 mt-3 hover:bg-blue-400 flex rounded-lg px-4 duration-300 cursor-pointer '>
    
    <Link href="/" className='gap-4 text-gray-700 flex'>
      <FaMoon size={22} />Dark Mode</Link>
   </li>
</div>
  )
}

export default SubComponent