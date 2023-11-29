
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import useCart from "../Hook/useCart";

const Package = () => {
   const [card,setCard]=useState([]);
    const [cart]=useCart();  
   useEffect(()=>{
       fetch('http://localhost:5000/package')
       .then(res=>res.json())
       .then(data=>setCard(data));
   },[])

      console.log(card);
    return (
          <>
           <Link to='/dashboard/cart' ><button className='btn py-4'><FaCartPlus></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div></button></Link>
          <div className="grid grid-cols-3 mt-4">
            {
              card.map(card=><Cards key={card._id} card={card}></Cards>)
            }
          </div>
            <div className="text-center mt-4">
            <Link to='package'><button className="btn btn-outline text-center">All package</button></Link>
            </div>
          </>
    );
};

export default Package;