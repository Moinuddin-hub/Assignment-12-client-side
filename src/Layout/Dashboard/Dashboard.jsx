import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import useCart from "../../Hook/useCart";
const Dashboard = () => {
    const [cart]=useCart();
    // get isAdmin value from the database
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">
               {
                isAdmin?
                     <>
                    <li> <NavLink to="/dashboard/users"><FaHome/>My Profile</NavLink></li>
                    <li> <NavLink to="/dashboard/booking"><FaShoppingBag/>Add Package</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"><FaShoppingBag/>Manage Users</NavLink></li>
                    </>
                    :
                    <>
                     <li> <NavLink to="/dashboard/profile"><FaHome/>My Profile</NavLink></li>
                    <li> <NavLink to="/dashboard/booking"><FaShoppingBag/>My Bookings</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"><FaShoppingBag/>My Wishlist</NavLink></li>
                    </>
                 
               }
            <div className="divider">OR</div>
            <li> <NavLink to="/"><FaHome/>My Profile</NavLink></li>
            </ul>
            </div>
           
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;