import React from 'react';
import car from '../../public/image/perfect.jpg'
import lego from '../../public/image/lego.webp'
const Banner = () => {
  return (
    <div className='flex justify-between mt-10'>
      <div className='w-[350px]'><img src="https://www.lego.com/cdn/cs/catalog/assets/blt7b9439499134e234/1/AID901144GL_CITY_Frank_Lupell_Character-fullheight_1000x1000.png" alt="" /></div>

      <div className="bg-gradient-to-r from-indigo-900 to-pink-950 w-1/2 absolute mx-80">
        <img src='https://t3.ftcdn.net/jpg/02/92/20/60/360_F_292206062_q0nrRZpYWpsaOiS7LwzHMFRHtgvXfoEL.jpg' className=" mx-auto mt-16" />
        <div className="banner-content">
          <h1 className='animate-pulse text-blue-800 font-bold relative bottom-44 left-60'>WELCOME TO TOY MENIA</h1>
          <p>Explore the latest models and find your perfect car.</p>
          <button className="banner-button">Browse Cars</button>
        </div>
      </div>

      <div className='w-[350px]'><img src="https://www.lego.com/cdn/cs/catalog/assets/blt7b9439499134e234/1/AID901144GL_CITY_Frank_Lupell_Character-fullheight_1000x1000.png" alt="" /></div>
    </div>
  );
}

export default Banner;
