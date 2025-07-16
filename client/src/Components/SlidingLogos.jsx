import React from 'react'
import '../Components/SlidingLogos.css'
import logo1 from '../assets/Company/Snowflake.png'
import logo2 from '../assets/Company/airbnb.png'
import logo3 from '../assets/Company/BritishGas.png'
import logo4 from '../assets/Company/Flash.png'
import logo5 from '../assets/Company/Logogipsum.png'
import logo6 from '../assets/Company/Proline.png'
import logo7 from '../assets/Company/Hitech.png'
import logo8 from '../assets/Company/Priton.png'


const SlidingLogos = () => {
  return (
   <div className='m-3 text-2xl'>
                    <h1 data-aos="fade-down" data-aos-delay="100">Trusted by World Leading Brands</h1>
                    <div className='logo p-6'>
                        <div className="logo_track">
                            {/* 8 logos + duplicate for smooth loop */}
                            {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8].map((logo, i) => (
                                <div key={i} className='logo_slides'>
                                    <img src={logo} alt={`logo-${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            
  )
}

export default SlidingLogos