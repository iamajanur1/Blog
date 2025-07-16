import React, { useEffect } from 'react'
import '../Components/LeftSide.css'
import boy1 from '../assets/boy1.jpg'
import resume from '../assets/ClientResume.pdf'
import { Link } from 'react-router-dom'; // ✅ Correct!

import { IoMailOutline } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsBoxes } from "react-icons/bs";
import { FaIdCard } from "react-icons/fa";
import { RiBriefcaseLine } from "react-icons/ri";
import { AiOutlineTag } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import AboutMe from './AboutMe';
import Hero from './Hero';
import Blog from './Blog/Blog';
import Aos from 'aos';
import "aos/dist/aos.css"; // Import AOS styles

const LeftSide = ({ title }) => {

    useEffect(() => {

         
            // Initialize AOS with custom settings
           Aos.init({
    offset: 500,
    duration: 2000,
    easing: 'ease-in-out',
    mirror: true,
    once: false,
  });
  Aos.refresh();

        
        const container = document.getElementById('left-scroll');
        // const container = document.querySelector('left-scroll');

        if (container) {
            // Function to check and update element visibility
            const updateElementVisibility = () => {
                const aosElements = container.querySelectorAll('[data-aos]');

                aosElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();

                    // Check if element is in viewport
                    const isInViewport = (
                        rect.bottom >= containerRect.top + 20 && 
                        rect.top <= containerRect.bottom - 20
                    );

                    // Always ensure elements in initial viewport are visible
                    if (isInViewport) {
                        element.classList.add('aos-animate');
                        element.style.opacity = '1';
                    } else {
                        element.classList.remove('aos-animate');
                        element.style.opacity = '0';
                    }
                });
            };

            // Initial check - run multiple times to ensure everything loads
            const runInitialChecks = () => {
                updateElementVisibility();
                setTimeout(updateElementVisibility, 50);
                setTimeout(updateElementVisibility, 150);
                setTimeout(updateElementVisibility, 300);
            };

            // Run initial visibility check
            runInitialChecks();

            // Scroll handler
            const handleScroll = () => {
                updateElementVisibility();
            };

            // Add scroll event listener
            container.addEventListener('scroll', handleScroll);

            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <>
            <div id='left-scroll' className="left-scroll h-screen block bg-[#171b22] overflow-y-scroll">

                <div className='flex flex-col items-center pt-2 h-[370px] w-[270px]'>
                    <div className='' data-aos="zoom-in" data-aos-delay="100">
                        <img style={{ width: '200px', height: '220px', borderRadius:'20px' }} src={boy1} alt="" />
                        </div>

                    <h1 className='mt-3 font-semibold text-2xl' data-aos="fade-down" data-aos-delay="200">
                        Dharmendra Shaw
                    </h1>
                    <div>
                        <h1 className='mt-3 text-gray-600 font-medium text-xl' data-aos="fade-down" data-aos-delay="300">
                            {title}
                        </h1>
                    </div>
                    <div className='p-2 w-full flex flex-row items-center justify-between mt-1' data-aos="fade-up" data-aos-delay="400">
                        <IoMailOutline className='text-white text-2xl rounded-full bg-gray-800 hover:bg-pink-400 p-2 cursor-pointer transition-colors duration-300' size={35} />
                        <FaBehance className='text-white text-2xl rounded-full bg-gray-800 hover:bg-pink-400 p-2 cursor-pointer transition-colors duration-300' size={35} />
                        <FaBasketball className='text-white text-2xl rounded-full bg-gray-800 hover:bg-pink-400 p-2 cursor-pointer transition-colors duration-300' size={35} />
                        <LuLightbulb className='text-white text-2xl rounded-full bg-gray-800 hover:bg-pink-400 p-2 cursor-pointer transition-colors duration-300' size={35} />
                    </div>
                </div>
<br></br>
                <div className='navigation-menu'>
                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("home");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }
                    }} className='color h-fit flex items-center p-3 cursor-pointer'
                    data-aos="fade-right" data-aos-delay="100">
                        <FaHome size={20} />
                        <h1 className='ml-4 font-semibold'>Home</h1>
                    </a>
                    
                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("about");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: target.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }} className='color h-fit flex items-center p-3 cursor-pointer'
                    data-aos="fade-right" data-aos-delay="150">
                        <CgProfile size={20} />
                        <h1 className='ml-4 font-semibold'>About</h1>
                    </a>
                    
                    <hr className='text-gray-600' />
                    <a onClick={() => {
                        const rightSide = document.getElementById("right-scroll");
                        const target = document.getElementById("education");
                        if (rightSide && target) {
                            rightSide.scrollTo({
                                top: target.offsetTop,
                                behavior: "smooth"
                            });
                        }
                    }} 
                    className='color h-fit flex items-center p-3'
                    data-aos="fade-right" data-aos-delay="200"
                    >
                        <FaIdCard size={20} />
                        <h1 className='ml-4 font-semibold'>Resume</h1>
                    </a>
                    
                    <hr className='text-gray-600' />
                    <Link className='color h-fit flex items-center p-3'
                    data-aos="fade-right" data-aos-delay="250">
                        <BsBoxes size={20} />
                        <h1 className='ml-4 font-semibold'>Services</h1>
                    </Link>
                    
                    <hr className='text-gray-600' />
                    <Link className='color h-fit flex items-center p-3'
                    data-aos="fade-right" data-aos-delay="300">
                        <RiBriefcaseLine size={20} />
                        <h1 className='ml-4 font-semibold'>Portfolio</h1>
                    </Link>
                    
                    <hr className='text-gray-600' />
                    <Link className='color h-fit flex items-center p-3' 
                    data-aos="fade-right" data-aos-delay="350">
                        <AiOutlineTag size={20} />
                        <h1 className='ml-4 font-semibold'>Pricing</h1>
                    </Link>
                     <hr className='text-gray-600' />
                   <Link to="/blog" className='color h-fit flex items-center p-3' data-aos="fade-right" data-aos-delay="400">
                        <IoNewspaperOutline size={20} />
                        <h1 className='ml-4 font-semibold'>Blog</h1>
                        </Link>


                    
                    <hr className='text-gray-600' />
                    <Link className='color h-fit flex items-center p-3'
                    data-aos="fade-right" data-aos-delay="450">
                        <MdAlternateEmail size={20} />
                        <h1 className='ml-4 font-semibold'>Contact</h1>
                    </Link>
                    
                    <hr className='text-gray-600' />
                </div>

                <div className='p-6 flex justify-center items-center' >
                    <a href={resume} target='_blank' rel="noopener noreferrer" className='group p-1 flex justify-between items-center h-fit w-full bg-[#0f141c] rounded-full overflow-hidden relative hover:bg-[#ff759c] transition-all duration-500'>
                        <div className='icon-container h-12 w-12 flex items-center justify-center rounded-full bg-[#ff759c] transition-all duration-500 group-hover:translate-x-40 group-hover:bg-[#fff] group-hover:text-[#ff759c]'>
                            <GrDocumentDownload size={20} />
                        </div>
                        <h1 className='mr-5 font-bold relative'>
                            <span className="block transition-all duration-500 group-hover:-translate-x-2 group-hover:opacity-0">Download CV</span>
                            <span className="block absolute top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-15">Click Here</span>
                        </h1>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LeftSide