// import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
// http://localhost:5173/details/65674e9603eda4481b7e0a67
// http://localhost:5173/details/642c155b2c4774f05c36ee88
const Details = () => {
  // const item = useLoaderData();
  // console.log(item);
  const {_id}=useParams();
  console.log(_id);
  const [item,setItem]=useState([]);
   const[loading,setLoading]=useState(true);
  useEffect(()=>{
    fetch(`https://assignment-12-server-opal-seven.vercel.app/package/${_id}`)
    .then(res=>res.json())
    .then((data)=>{
         setItem(data);
          setLoading(false);
    });
   
  },[_id])
console.log(item);
if(loading){
  return <h2 className="">Loading</h2>
}

  const [{ image,  title, price, description, location }] = item;

  return (
    <>
      <h2 className="text-3xl text-center font-bold mt-4 py-4">{location}</h2>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="py-6 text-2xl font-bold">{price}</p>

            <button className="btn btn-primary">contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
