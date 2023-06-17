import Navbar from '../components/views/Navbar'
import Main from '../components/views/HeroSection/HomePage'
// import BackGroundImg from '../components/assets/images/BackGroundImg'
import Image from 'next/image'
import BackGroundImage from '../components/assets/images/SecondImg.jpeg'

export default function Home() {
  return (
    <>
    
    <Image className='fixed inset-0 w-full h-full z-[-1] bg-no-repeat bg-cover' src={BackGroundImage} alt='My Image' />
    <div className='bg-[#F5F5F5] rounded-md mx-16 my-4 ' >
    <Navbar />
    <Main />
   
    
    </div>
    
    
    {/* <BackGroundImg /> */}
    </>
  )
}
