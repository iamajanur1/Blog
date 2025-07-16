import React, { useEffect } from 'react';
import '../Components/RightSide.css';
import RightkaLeft from './RightkaLeft';
import RightkaRight from './RightkaRight';
import SlidingLogos from './SlidingLogos';
import AboutMe from './AboutMe';
import Aos from 'aos'; 
import "aos/dist/aos.css";
import Education from './Education';

const RightSide = ({ title }) => {

  useEffect(() => {
    // Initialize AOS with custom settings
    Aos.init({
      offset: 0,
      duration: 2000,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
      // Disable default scroll detection
      disable: false,
      startEvent: 'DOMContentLoaded',
    });

    const container = document.getElementById('right-scroll');
    
    if (container) {
      // Custom scroll handler for AOS
      const handleScroll = () => {
        // Force AOS to recalculate animations based on current scroll position
        Aos.refresh();
        
        // Get all AOS elements within the container
        const aosElements = container.querySelectorAll('[data-aos]');
        
        aosElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          // Calculate if element is in viewport relative to container
          const isInViewport = (
            rect.top >= containerRect.top && 
            rect.top <= containerRect.bottom - 100 // 100px offset
          );
          
          const isAboveViewport = rect.top < containerRect.top - 100;
          
          // Add or remove AOS classes based on scroll direction and position
          if (isInViewport) {
            element.classList.add('aos-animate');
          } else if (isAboveViewport) {
            // Remove animation class when scrolling back up (mirror effect)
            element.classList.remove('aos-animate');
          }
        });
      };

      // Add scroll event listener to custom container
      container.addEventListener('scroll', handleScroll);
      
      // Initial check
      handleScroll();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div id="right-scroll" className='h-full w-[845px] bg-[#0f141c] pt-15 relative overflow-y-scroll'>
       
        <section id="home" className='h-full mb-20 relative flex gap-10 justify-center items-center'>
          <RightkaLeft title={title} />
          <RightkaRight />
        </section>
        
        <SlidingLogos />

        <section id="about" className='p-3'>
          <AboutMe />
        </section>

        <section id='education' className='p-3'>
        <Education/>
        </section>
        
      </div>
    </>
  );
};

export default RightSide;