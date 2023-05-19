import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
const Category = ({ toy }) => {
  const data = toy
  console.log(data)






  return (
    <div className=''>
      <Tabs>
        <TabList>
          <Tab>
            <h1 className='font-bold text-3xl text-yellow-300  w-fit mx-5 p-5

            bg-blue-900
            '>{data.name}</h1>
          </Tab>

        </TabList>

        <TabPanel>
          <div className='flex justify-between items-center flex-col border border-blue-500 gap-10'>
            <h2 className='text-xl text-lime-200 font-bold bg-blue-500 w-full'>{data.secOne.name}</h2>
            <img src={data.secOne.image} alt="" className='w-full h-[150px]' />
          </div>

          <div className='border border-blue-500'>
            <h2 className='text-xl text-lime-200 bg-blue-500 w-full  font-bold'>{data.secTwo.name}</h2>
            <img src={data.secTwo.image} alt="" className='w-full h-[150px]' />
          </div>

          <Link to={`/toys/${data._id}`}>
            <button className="px-4 py-4 bg-gradient-to-r from-indigo-900 to-pink-950">
              <p className='text-white'>VIEW DETAILS</p>
            </button>
          </Link>
        </TabPanel>

      </Tabs>
    </div>


  );
};

export default Category;