import React from 'react';
import toy1 from '../../public/image/gari.jpg'
import toy2 from '../../public/image/car-gallery-2.jpg'
import toy3 from '../../public/image/car-gallery-03.jpg'
import toy4 from '../../public/image/logic.png'
const Gallery = () => {
  return (
    <div className='mx-12'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '>CAR TOYS</p>
            <img src={toy1} className="w-full" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '> PUZZLE TOYS</p>
            <img src={toy4} className="w-full" />

          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '>LEGO TOYS</p>
            <img src={toy3} className="w-full" />

          </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;