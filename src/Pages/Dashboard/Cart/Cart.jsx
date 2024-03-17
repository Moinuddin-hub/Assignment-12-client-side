import Swal from "sweetalert2";

import useCart from "../../../Hook/useCart";
import { axiosSecure } from "../../../Hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className=" shadow-xl mx-4">
      <div className="flex justify-around items-center ">
        <h2 className="text-6xl">Items:{cart.length}</h2>
        <h2 className="text-6xl">Total Price:{totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-2xl font-bold">Image</th>
              <th className="text-2xl font-bold">Name</th>
              <th className="text-2xl font-bold">Price</th>
              <th className="text-2xl font-bold">Delete</th>
              <th className="text-2xl font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.type}</td>
                <td>TK:{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg "
                  >
                    <FaTrashAlt className="text-red-400"></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to={`/details/${item.cardIt}`}>
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
