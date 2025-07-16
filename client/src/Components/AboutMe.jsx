import React from 'react'
import '../Components/AboutMe.css'
import Aos from 'aos';


const AboutMe = () => {


      return (
        <div id='about' className='about-container p-3 mt-4'>
            <div className=' flex items-baseline gap-5'>
                <h1 className=' text-[48px] font-[700] flex items-center '
                data-aos="fade-down" 
                data-aos-delay="100">
        About Me.</h1>
                <div className='line flex-1 bg-gray-800 h-[2px] w-2/3'></div>
            </div>

            <div className='mb-10' data-aos="zoom-in" 
                data-aos-delay="50">
                <p className='text-xl font-light text-[#909090]' >As an SEO Specialist. I am skilled in analyzing and improving the online visibility and search engine rankings of websites. My expertise lies in
                    implementing complete SEO strategies, conducting keyword research, analyzing website traffic and user behaviour, site audits, and creating
                    and executing link-building strategies.
                </p>
            </div>
            

            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Name</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full'>Dharmendra Shaw</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Nationality</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>India</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Phone</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>(+91)7002025855</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Email</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>deeproshan.13@gmail.com</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-2xl w-full max-w-[200px]'>Experience</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-2xl w-full '>5+ Years</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Freelance</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>Available</p>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Linkedin</p>
                <a href='https://www.linkedin.com/in/deeproshan-shaw/' target='_blank' className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>Dharmendra Shaw</a>
                   
            </div>
            <div className='h-fit w-full mt-3 flex items-center pb-10px  '>

                <p className='mb-[1rem] text-[#909090] leading-8 text-xl w-full max-w-[200px]'>Language</p>
                <p className='mb-[1rem] about text-[#fff] leading-8 text-xl w-full '>Assamese, Bengali, English, Hindi</p>
                   
            </div>
        </div>
    )
}

export default AboutMe