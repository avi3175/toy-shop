import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToy = () => {

const{user} = useContext(AuthContext)
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = (event) =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = user?.email
    const price = form.price.value
    const rating = form.rating.value
    const quantity = form.quantity.value
    const sellerName = form.sellername.value
    const description = form.details.value
    const subcategory = form.subcategory.value
    const order = {
        customerName:name,email,price,rating,sellerName,subcategory
    }
    console.log(order)
    

    fetch('http://localhost:5000/addtoy',{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(order)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        alert("POST WELL DONE")
      }
    })
   
  }


  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleAdd}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block mb-2 font-bold">
            Seller Name:
          </label>
          <input
            type="text"
            id="sellerName"
            name='sellername'
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerEmail" className="block mb-2 font-bold">
            Seller Email:
          </label>
          <input
            type="email"
            id="sellerEmail"
            name='email'
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block mb-2 font-bold">
            Sub-category:
          </label>
          <select
            id="subCategory"
            value={subCategory}
            name='subcategory'
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select sub-category</option>
            <option value=">Branded sports cars">Branded sports cars</option>
            <option value="mini police car">mini police car</option>
            <option value="Remote control car">Remote control car</option>
            <option value="Lego car">Lego car</option>
            <option value="Monster Truck">Monster Truck</option>
            <option value="Locomotive Train">Locomotive Train</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-bold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2 font-bold">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            min="0"
            max="5"
            step="0.1"
            name='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block mb-2 font-bold">
            Available Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            name='quantity'
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-bold">
            Detail Description:
          </label>
          <textarea
            id="description"
            value={description}
            name='details'
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToy;
