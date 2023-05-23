import React, { useEffect, useState } from 'react';
import Category from './Category';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const ShopByCategories = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('https://great-and-perfect-toy-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys)
    return (
        <div className='text-center mt-10 mb-5 '>
            <h1 className='bg-yellow-400 text-6xl font-bold mb-10 w-fit mx-auto p-10 rounded-sm'>SHOP BY CATEGORIES</h1>
            <div className='flex justify-center items-center lg:flex-row md:flex-row sm"flex-col'>
                {
                    toys.map(toy => <Category
                        keys={toy.id}
                        toy={toy}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default ShopByCategories;