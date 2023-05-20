import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Gallery from './Gallery';
import ShopByCategories from './ShopByCategories';
import Review from './Review';
import Extra from './Extra';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategories></ShopByCategories>
            <Review></Review>
            <Extra></Extra>
        </div>
    );
};

export default Home;