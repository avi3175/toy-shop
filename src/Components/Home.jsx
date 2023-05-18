import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategories from './ShopByCategories';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategories></ShopByCategories>
        </div>
    );
};

export default Home;