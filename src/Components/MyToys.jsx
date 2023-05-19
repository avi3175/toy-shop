import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext)
  const [utoy,setUtoy] = useState([])
 console.log(utoy)
 

//  const handleDelete = (id) =>{
//   const proceed = confirm("DO YOU REALLY WANNA DELETE")
//   if(proceed){
//     fetch(`http://localhost:5000/addstoy/${id}`,{
//       method:"DELETE",

//     })
//     .then(res=>res.json())
//     .then(data=>{
//       console.log(data)
//       if(data.deletedCount>0){
//         alert('DELETE SUCCESSFULLY!')
//         const remaining = 
//       }
//     })
//   }
//  }

  const url = `http://localhost:5000/addstoy?email=${user.email}`
  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setUtoy(data))
  },[url])



  const handleDelete = (id) =>{
    const proceed = confirm("DO YOU REALLY WANNA DELETE")
    if(proceed){
      fetch(`http://localhost:5000/addstoy/${id}`,{
        method:"DELETE",
  
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          alert('DELETE SUCCESSFULLY!')
          const remaining = utoy.filter(ut=>ut._id !== id)
          setUtoy(remaining)
        }
      })
    }
   }



 const handleConfirm = (id) =>{
        fetch(`http://localhost:5000/addstoy/${id}`,{
          method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.modifiedCount>0){
            // update state
          }
        })
 }






  return (
    <div className='flex flex-col justify-between items-center'>
      <h1>SPECIFIC TOYS FOR SINGLE USER SHOULD BE SHOWN IN HERE:{utoy.length}</h1>
      <div>
        {
          utoy.map(t=> <div key={t._id}>
           
            <div className="bg-rose-900 shadow-xl rounded-sm  mt-10 text-center w-fit flex">
                <div className="mb-4  p-10 text-right">
                    <h3 className="text-xl font-bold text-yellow-400">NAME:{t.customerName}</h3>
                    <h3 className="text-xl font-bold text-lime-400">PRICE:{t.price}</h3>
                    <h3 className="text-xl font-bold text-blue-600">RATING:{t.rating}</h3>
                    <h3 className="text-xl font-bold text-sky-700">EMAIL:{t._id}</h3>
                  </div>
               
                <button   onClick={()=>handleDelete(t._id)} className="bg-blue-700 hover:bg-rose-700 text-white py-2 px-4 rounded">
                    <p className='font-bold text-3xl text-yellow-400'>DELETE THE TOY</p>
                </button>
                <button   onClick={()=>handleDelete(t._id)} className="bg-rose-700 hover:bg-rose-700 text-white py-2 px-4 rounded">
                    <p className='font-bold text-3xl text-yellow-400'>UPDATE THE TOY</p>
                </button>
            </div>
        </div>)
        }
      </div>
    </div>
  );
}

export default MyToys;
