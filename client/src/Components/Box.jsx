import React, { useEffect, useState } from 'react'
import '../Components/box.css'


const brightColors = [
  '#ff0000', // red
  '#00ff00', // lime green
  '#0000ff', // blue
  '#00ffff', // cyan
  '#ff00ff', // magenta
  '#ffff00', // yellow
  '#ff8800', // orange
  '#00ff88', // mint
  '#8800ff', // violet
  '#ff1493', // deep pink
];


   const getRandomColor = () => {
  const index = Math.floor(Math.random() * brightColors.length);
  return brightColors[index];
};

const Box = () => {

      const [color1, setColor1] = useState('#ff0000');
  

  
  useEffect(() => {
    const interval = setInterval(() => {
      setColor1(getRandomColor());
      
    }, 5000);
    return () => clearInterval(interval);
  }, []);

 

  return (

    <div 
  className="absolute top-0 left-0 w-full min-h-screen -z-10 overflow-hidden"
>
  <div className="h-fit grid grid-row-1 justify-end">
    <div
      className="blur-box box2"
      style={{
        backgroundColor: color1,
        boxShadow: `0 0 60px 20px ${color1}, 0 0 60px 20px ${color1}, 0 0 60px 20px ${color1}`
      }}
    ></div>
  </div>
  <div className="h-fit grid grid-row-1 justify-start">
    <div
      className="blur-box box1"
      style={{
        backgroundColor: color1,
        boxShadow: `0 0 20px 20px ${color1}, 0 0 20px 20px ${color1}, 0 0 60px 20px ${color1}`
      }}
    ></div>
  </div>
</div>

    // <div className=" h-full  gap-[250px] overflow-hidden ">
    //   <div className="h-fit grid grid-row-1 justify-end ">
    //     <div className="blur-box box2" style={{ backgroundColor: color1,boxShadow: `0 0 60px 20px  ${color1}, 0 0 60px 20px ${color1}, 0 0 60px 20px ${color1}` }}></div>
    //   </div>
    //   <div className="h-fit grid grid-row-1 justify-start">
    //     <div className="blur-box box1" style={{ backgroundColor: color1,boxShadow: `0 0 20px 20px ${color1}, 0 0 20px 20px ${color1}, 0 0 60px 20px ${color1}`, }}></div>
    //   </div>
    // </div>
  )
}

export default Box
