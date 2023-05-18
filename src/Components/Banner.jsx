import React from 'react';
import car from '../../public/image/perfect.jpg'
import lego from '../../public/image/lego.webp'
const Banner = () => {
  return (
    <div className='flex justify-between mt-10'>
      <div className='w-[350px]'><img src={lego} alt="" /></div>

      <div className="bg-gradient-to-r from-indigo-900 to-pink-950 w-1/2 absolute mx-80">
        <img src={car} className="banner-image mx-auto mt-16" />
        <div className="banner-content">
          <h1 className='animate-pulse text-white font-bold relative bottom-44 left-60'>WELCOME TO TOY MENIA</h1>
          <p>Explore the latest models and find your perfect car.</p>
          <button className="banner-button">Browse Cars</button>
        </div>
      </div>

      <div className='w-[350px]'><img src={lego} alt="" /></div>
    </div>
  );
}

export default Banner;
