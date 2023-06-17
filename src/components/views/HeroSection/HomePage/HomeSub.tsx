import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomeSub = () => {
  return (
    
   
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
  )
}

export default HomeSub;