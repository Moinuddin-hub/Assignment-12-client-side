import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import useAdmin from "../../Hook/useAdmin";
// import useCart from "../../Hook/useCart";
const Dashboard = () => {
    const[isAdmin]=useAdmin();
   
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-600">
                <ul className="menu">
               {
                isAdmin?
                     <>
                    <li> <NavLink to="/dashboard/userProfile"><FaHome/>My Profile</NavLink></li>
                    <li> <NavLink to="/dashboard/addPackage"><FaShoppingBag/>Add Package</NavLink></li>
                    <li> <NavLink to="/dashboard/users"><FaShoppingBag/>Manage Users</NavLink></li>
                    </>
                    :
                    <>
                     <li> <NavLink to="/dashboard/userProfile"><FaHome/>My Profile</NavLink></li>
                    <li> <NavLink to="/dashboard/userBooking"><FaShoppingBag/>My Bookings</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"><FaShoppingBag/>My Wishlist</NavLink></li>
                    </>
                 
               }
            <div className="divider">OR</div>
            <li> <NavLink to="/"><FaHome/>Home page</NavLink></li>
            </ul>
            </div>
           
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;