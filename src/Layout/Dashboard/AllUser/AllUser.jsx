import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useAuth from "../../../Hook/useAuth";
import { FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");

      return res.data;
    },
  });
  const handleDelete = () => {};
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
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg "
                  >
                    <FaTrashAlt className="text-red-400"></FaTrashAlt>
                  </button>
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
