import { Link } from "react-router-dom";


const Gallery = () => {
    return (
       <>
      <div className="w-1/3 mx-4 md:w-1/2 lg:w-full">
      <div className="text-center font-bold text-3xl mt-8">Our gallery</div>
        <div className="grid grid-cols-3 gap-2 mt-8 mx-auto">
            <img src="https://i.ibb.co/mX7WMnW/OIP-3.jpg" alt="" className="w-80 h-40" />
            <img src="https://i.ibb.co/2PSrB4g/OIP-5.jpg" alt="" className="w-80 h-80 row-span-2" />
            <img src="https://i.ibb.co/XFgNqLY/OIP-4.jpg" alt="" className="w-80 h-40" />
            <img src="https://i.ibb.co/ncNf2QM/bus.jpg" alt="" className="w-80 h-40" />
            <img src="https://i.ibb.co/HnhWXfB/ph-531.jpg" alt="" className="w-80 h-40" />

        </div>
        <div className="mt-8 flex gap-4">
             <Link to='booking'><button className="btn btn-primary">Add Booking</button></Link>
             <Link to='tourGuideProfile'><button className="btn btn-primary">Tour Guide</button></Link>
        </div>
      </div>
       </>
    );
};

export default Gallery;
