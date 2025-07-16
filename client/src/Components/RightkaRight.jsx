import React, { useEffect } from 'react'
import boy2 from '../assets/boy2.jpg'
import spin1 from '../assets/spin1.png'
import spin2 from '../assets/spin2.png'
import works from '../assets/works.jpeg'
import works2 from '../assets/works2.jpeg'
import works3 from '../assets/works3.jpeg'
import works4 from '../assets/works4.jpeg'
import Aos from 'aos'
import "aos/dist/aos.css"; // Import if not imported already


const RightkaRight = () => {

    useEffect(() => {
  Aos.refresh();
}, []);

  return (
    <>
    <div className=' h-[458px] w-[451.5px] mt-11'>

                        <img style={{  borderRadius:'50px' }} src={boy2} className='appear' alt="" data-aos="zoom-in" data-aos-delay="100" />

                        <div className='rotate absolute top-[8rem] right-[20rem]  '>
                            <img src={spin1} alt="" />
                        </div>
                        <div className='rotate absolute top-[0rem] right-[22rem] '>
                            <img src={spin2} alt="" />
                        </div>


                    </div>

                    <div className='absolute flex flex-col gap-5 -bottom-[14px] right-[2.6rem] h-fit w-[20rem] bg-[#171b22] p-5 rounded-2xl '
                       style={{ boxShadow: '0 40px 40px -25px #131f2f99' }}
                       >
                        <h1 className='text-xl font-medium '>Worked with more than 100 people</h1>
                        <div className='h-fit flex justify-between items-center gap-5 pl-2'>
                            <div className='image-wapper flex w-full items-center gap-1'>
                                <div className='img-card'>
                                    <img src={works} alt="" />
                                </div>
                                <div className='img-card' >
                                    <img src={works2} alt="" />
                                </div>
                                <div className='img-card'>
                                    <img src={works3} alt="" />
                                </div>
                                <div className='img-card'>
                                    <img src={works4} alt="" />
                                </div>
                                <hr className='h-0.5 w-full bg-white' />
                            </div>

                            <h1 className='text-lg font-medium'>100+ <br />Clients</h1>
                        </div>
                    </div>
                    
                  
                    </>
  )
}

export default RightkaRight