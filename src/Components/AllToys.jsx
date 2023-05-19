import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const allTheToys = useLoaderData()
  console.log(allTheToys)
  return (
    <div>
       <h1>ALL THE TOYS SHOULD HAVE TO BE A TABEULAR FORM:{allTheToys.length}</h1>
    </div>
  );
}

export default AllToys;
