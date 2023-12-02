import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
// import useAuth from "../../../Hook/useAuth";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users",{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('access-token')}`
        }
      });

      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an admin now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDelete=(user)=>{
    // console.log(id);
   
Swal.fire({
title: "Are you sure?",
text: "You won't be able to revert this!",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "Yes, delete it!"
}).then((result) => {
if (result.isConfirmed) {
axiosSecure.delete(`/users/${user._id}`)
.then(res=>{
if(res.data.deletedCount >0){
   refetch()
   Swal.fire({
       title: "Deleted!",
       text: "Your file has been deleted.",
       icon: "success"
     });
}
})
}
});
}
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Tourist</h2>
        <h2 className="text-3xl">Total Tourist:{users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <h2 className="">No:</h2>
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                {/* <img src={user.photoURL} alt={user.displayName} /> */}
                <img
                  src={user.img}
                  alt={user.displayName}
                  className="w-20 h-20 rounded-full"
                />

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
             {
              user.role=='admin'?'admin':   <button
              onClick={() => handleMakeAdmin(user)}
              className="btn btn-ghost btn-2xl "
            >
              <FaUsers className="text-red text-2xl"></FaUsers>
            </button>
             }
                </td>
                <td>
                <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg "
                  >
                    <FaTrashAlt className="text-red-400"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
