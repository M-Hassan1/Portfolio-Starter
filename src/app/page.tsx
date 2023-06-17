import Navbar from '../components/views/Navbar'
import Main from '../components/views/HeroSection/HomePage'
import Image from 'next/image'
import BackGroundImage from '../components/assets/images/SecondImg.jpeg'

export default function Home() {
  return (
    <>
    
    <Image src={BackGroundImage} alt='My Image' className='fixed inset-0 w-full h-full z-[-1] bg-no-repeat bg-cover' />
   
    <div className='bg-[#F5F5F5] rounded-md mx-16 my-4 ' >
    <Navbar />
    <Main />
   
    
    </div>
    
    
    {/* <BackGroundImg /> */}
    </>
  )
}
