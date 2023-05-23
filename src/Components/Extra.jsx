import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Extra = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    
    return (
        <div>
            <div className="bg-gray-100 py-8" >
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-4">Explore Our future Toy </h2>
                    <div className="flex flex-wrap justify-center" >
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"   data-aos="flip-left">
                            <img src="https://c4.wallpaperflare.com/wallpaper/132/223/641/delorean-dmc-delorean-car-car-show-back-to-the-future-hd-wallpaper-thumb.jpg" alt="Toy 1" className="w-full h-48 object-fit mb-2" />
                            <h3 className="text-lg font-semibold mb-1">Toy 1</h3>
                            <p className="text-gray-600 font-bold text-2xl">SMART CAR TOY</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" data-aos="flip-right" >
                            <img src="https://media.wired.com/photos/5dc31c9ff34856000812604a/3:2/w_888,h_592,c_limit/Gear-GoCube.jpg" alt="Toy 2" className="w-full h-48 object-cover mb-2" />
                            <h3 className="text-lg font-semibold mb-1">Toy 2</h3>
                            <p className="text-gray-600 font-bold text-2xl">AI RUBICS CUBE</p>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4" data-aos="flip-up">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVrSsN5V6wpbYp426uA_V53pwBWWXr8oJXQ&usqp=CAU" alt="Toy 3" className="w-full h-48 object-cover mb-2" />
                            <h3 className="text-lg font-semibold mb-1">Toy 3</h3>
                            <p className="text-gray-600 font-bold text-2xl">ROBOT FOR CODING</p>
                        </div>
                        {/* Add more items as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;