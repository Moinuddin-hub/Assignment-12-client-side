
import { useEffect, useState } from "react";
import Cards from "./Cards";
const Package = () => {
   const [card,setCard]=useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/package')
       .then(res=>res.json())
       .then(data=>setCard(data));
   },[])

      console.log(card);
    return (
          <>
          <div className="grid grid-cols-3">
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