import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const allTheToys = useLoaderData()
  console.log(allTheToys)
  return (
    <div className='text-center'>
      <h1 className='font-bold text-5xl text-indigo-900'>ALL
       <span className='text-pink-500 mx-5'>THE</span> 
       <span className='text-lime-500'>TOYS</span> 
       
       </h1>

      <div className='mx-96 mt-10 '>
      {
        allTheToys.map(toy =>

          <div className="overflow-x-auto" key={toy._id}>
            <table className="table table-compact w-fit">
              <thead>
                <tr>
                  
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>SELLER NAME</th>
                  <th>SUBCATEGORY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{toy.customerName}</th>
                  <td>{toy.email}</td>
                  <td>{toy.price}</td>
                  <td>{toy.rating}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.subcategory}</td>
                  
                </tr>

              </tbody>
            </table>
          </div>

        )
      }
      </div>

    </div>
  );
}

export default AllToys;
