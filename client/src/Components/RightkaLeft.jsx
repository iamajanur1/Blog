import React from 'react'
import '../index.css'
import Aos from 'aos'; 
import "aos/dist/aos.css";

const RightkaLeft = ({title}) => {



  return (
     <div className='relative flex flex-col gap-5 p-4 h-full w-[422.5px] ' data-aos="zoom-in" data-aos-delay="100">

            <h1 className=' text-5xl tracking-wider flex flex-col  font-semibold ' data-aos="zoom-in" data-aos-delay="100" >Dharmendra<span className='font-light'><p>Shaw</p></span></h1>
            <h2 className='mt-5 mb-8 text-2xl font-medium text-pink-400'>{title}</h2>
            <p className='relative text-[22px]  text-[#909090] ' data-aos="fade-up" data-aos-delay="100">We appreciate your trust greatly our  clients choose us & our products because they know we are the best.</p>

            <div className=' w-full h-full rounded-full  flex justify-center items-center  gap-4 p-3' data-aos="fade-up" data-aos-delay="500">
                <button className='button_1 '>View Work</button>
                <button className='button_2 '>Contact Me</button>
            </div>
        </div>
  )
}

export default RightkaLeft