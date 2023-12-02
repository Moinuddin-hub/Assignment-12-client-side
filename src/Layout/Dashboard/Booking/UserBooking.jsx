// import useCart from "../../../Hook/useCart";

import { useEffect, useState } from "react";
// import Books from "./Books";

// import { useEffect, useState } from "react";

const UserBooking = () => {

  
 const[booking,setBooking]=useState([]);
 useEffect(()=>{
  fetch('https://assignment-12-server-opal-seven.vercel.app/booking')
  .then(res=>res.json())
  .then((data)=>{
      setBooking(data);
  })
 },[])
 console.log(booking);
  // console.log(cart);
  // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(cart);
  const {name,category,date,price}=booking
  return (
    <div>
    
       <h2 className="text-3xl text-center font-bold mt-8">User all booking</h2>
      {/* <div className="flex justify-around items-center mt-4">
            <h2 className="text-4xl">Items:</h2>
            <h2 className="text-4xl">Total Price:</h2>
            <button className="btn btn-primary" >Pay</button>
            </div>  */}
      <div className="overflow-x-auto">
        <table className="table mt-4">
        
            <thead>
            <tr>
            
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Tour guide Name</th>
              <th className="text-xl font-bold">Tour date</th>
              <th className="text-xl font-bold">Tour price</th>
              <th className="text-xl font-bold">status</th>
            </tr>
          </thead> 
          {
        // booking.map((item)=><Books key={item._id} item={item}></Books>)
}
        {
          booking.map(item=><tr key={item._id}>
               <td>{item.name}</td>
               <td>{item.category}</td>
               <td>{item.date}</td>
               <td>{item.price}</td>
               <td><button className="btn btn-primary">Accept</button></td>
          </tr>)
        }
        </table>
          </div>   
    </div>
  );
};

export default UserBooking;
