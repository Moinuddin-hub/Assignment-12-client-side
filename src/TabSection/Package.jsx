
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import usePackage from "../Hook/usePackage";
const Package = () => {
   const [card,setCard]=useState([]);
   const[cart]=usePackage();
   useEffect(()=>{
       fetch('http://localhost:5000/package')
       .then(res=>res.json())
       .then(data=>setCard(data));
   },[])

      console.log(card);
    return (
          <>
           <Link to='/' ><button className='btn py-4'><FaCartPlus></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div></button></Link>
          <div className="grid grid-cols-3 mt-4">
            {
              card.map(card=><Cards key={card._id} card={card}></Cards>)
            }
          </div>
            <div className="text-center mt-4">
            <button className="btn btn-outline text-center">All package</button>
            </div>
          </>
    );
};

export default Package;