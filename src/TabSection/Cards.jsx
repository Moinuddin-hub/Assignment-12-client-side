import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../Hook/useAxiosSecure";
import usePackage from "../Hook/useCart";
const Cards = ({ card }) => {
  console.log(card);
  const navigate = useNavigate();
  const location=useLocation();
  const axiosSecure=useAxiosSecure();
  const { user } = useAuth();
  const [,refetch]=usePackage();
  const { _id, image, type, title, price,name } = card;
  const handleCard = () => {
    // console.log(user.email, item);
    if (user && user.email) {
      //
      const cartItem = {
        cardIt: _id,
        email: user.email,
        name,
        image,
        price,
        type,
        
      
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title:"cart added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "please login",
        text: "Please login and add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
   
      <div
       
        className="card card-compact w-96 bg-base-100 shadow-xl"
      >
        <div  onClick={handleCard}>
        <figure>
          <img src={image} alt="" className="w-full h-80" />
        </figure>
        <div className="-mt-8 flex justify-end">
          <h2 className="text-2xl font-bold  bg-slate-900 text-white">
            {price}
          </h2>
        </div>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{type}</h2>
          <h2 className="text-xl font-bold ">{title}</h2>
          </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        
      
      </div>
    </>
  );
};

export default Cards;
