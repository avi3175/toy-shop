import React from 'react';
import toy1 from '../../public/image/gari.jpg'
import toy2 from '../../public/image/car-gallery-2.jpg'
import toy3 from '../../public/image/car-gallery-03.jpg'
import toy4 from '../../public/image/logic.png'
const Gallery = () => {
  return (
    <div className='mx-10 mt-48'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '>CAR TOYS</p>
            <img src="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90hbhbn7185859tqy2wxtknym/public" className="w-[728px]" />

          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '> TRAIN TOYS</p>
            <img src='https://media.istockphoto.com/id/1196393819/photo/wooden-toy-railway-and-pyramid-in-the-children-room.jpg?b=1&s=170667a&w=0&k=20&c=grJyBZ_8OUPpvVgnqVdBWq7_ILjIAc05MlVBon9rzJk=' className="w-full" />

          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className='flex items-center'>
            <p className='font-bold text-blue-500 text-6xl '>LEGO TOYS</p>
            <img src='https://c4.wallpaperflare.com/wallpaper/468/700/853/car-lego-wallpaper-preview.jpg' className="w-full" />

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