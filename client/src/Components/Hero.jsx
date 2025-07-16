import React, { useEffect, useState } from 'react'
import Box from './Box'
import '../Components/hero.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import Aos from 'aos'
import "aos/dist/aos.css";


const Hero = () => {

  const title1 = ["Back-End Developer", "Full Stack Developer", "Freelancer"];
  const title2 = ["Developer", "Designer", "Freelancer"];
  const [currentTitleIndex1, setCurrentTitleIndex1] = useState(0);
  const [currentTitleIndex2, setCurrentTitleIndex2] = useState(0);

  useEffect(() => {

    const interval1 = setInterval(() => {
      setCurrentTitleIndex1((prev) => (prev + 1) % title1.length);
    }, 3000); // Change every 3 seconds
    const interval2 = setInterval(() => {
      setCurrentTitleIndex2((prev) => (prev + 1) % title2.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval1, interval2);
  }, []);

 


  return (
    <div className="relative  w-full min-h-screen overflow-hidden ">
      <Box /> {/* will be behind */}
      <div className="boxBg absolute top-0 left-0 w-full h-full z-11" /> {/* will stay above */}

      <div id='main' className='absolute flex h-full w-fit top-0 left-30 z-10 text-white   '>

        <LeftSide title={title2[currentTitleIndex1]} />
        <RightSide title={title1[currentTitleIndex2]} />
      </div>

    </div>

  )
}

export default Hero
