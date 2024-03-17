
import { useEffect, useState } from "react";
import Story from "./Story";


const AllStory = () => {
    const[story,setStory]=useState([]);

    useEffect(()=>{
        fetch('https://assignment-12-server-opal-seven.vercel.app/story/')
        .then(res=>res.json())
        .then(data=>setStory(data));
    },[])
    // console.log(story);
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mt-8">All story page</h2>
            <div className="grid grid-cols-4 gap-4 mt-8">
                {
                    story?.map(item=><Story key={item._id} item={item}></Story>)
                }
            </div>
        </div>
    );
};

export default AllStory;