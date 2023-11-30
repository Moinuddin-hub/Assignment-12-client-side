import useAuth from "../../../Hook/useAuth";


const UserProfile = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2 className="text-2xl text-center font-bold mt-8">Tourist Profile</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
   
     <th className="text-xl font-bold">Name</th>
        <th className="text-xl font-bold">About</th>
        <th className="text-xl font-bold">Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
    
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
           
            </div>
          </div>
        </td>
        <td>
         Bnagladesh
          <br/>
          <span className="badge badge-ghost badge-sm">Mirpur Dhaka</span>
        </td>
        <td>Student</td>
       
      </tr>
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserProfile;