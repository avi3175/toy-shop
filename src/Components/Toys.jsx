import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toys = () => {
    const toy= useLoaderData()
    return (
        <div>
            <h1>{toy.name}</h1>
        </div>
    );
};

export default Toys;