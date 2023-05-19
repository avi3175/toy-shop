import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext)
  const [utoy,setUtoy] = useState([])
 console.log(utoy)



  const url = `http://localhost:5000/addstoy?email=${user.email}`
  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setUtoy(data))
  },[])
  return (
    <div>
      <h1>SPECIFIC TOYS FOR SINGLE USER SHOULD BE SHOWN IN HERE</h1>
    </div>
  );
}

export default MyToys;
