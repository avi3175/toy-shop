import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Review = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div>
            <div className="py-4 mx-64 mt-10">
                <div className="max-w-4xl mx-auto flex items-center justify-center gap-5">
                    <div className="text-white bg-blue-500 text-center p-4" data-aos="fade-zoom-in">
                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                        <p className="text-lg">"This toy is amazing! My kids love it."</p>
                        <p className="text-gray-300">- Happy Parent</p>
                    </div>
                    <div className="text-white text-center bg-rose-800 p-4" data-aos="fade-zoom-in">
                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                        <p className="text-lg">"This toy is very durable."</p>
                        <p className="text-gray-300">- Happy kids</p>
                    </div>
                    <div className="text-white text-center bg-sky-500 p-4" data-aos="fade-zoom-in">
                        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
                        <p className="text-lg">"This toy is great under the hood! "</p>
                        <p className="text-gray-300">- Happy family</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;