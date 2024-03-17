import { Link,NavLink} from "react-router-dom";
import useAuth from "../../Hook/useAuth";
// import Avater from "../Avater";


const Navbar = () => {
    const Menus = () => 
                    <>
    <li className="px-4 py-2"><NavLink
     to="/" className={({ isActive, isPending }) =>  
       isPending ? "pending" : isActive ? "active" : ""   } >Home
      </NavLink></li>
      <li className="px-4 py-2"><NavLink to="community" className={({ isActive, isPending }) =>  
       isPending ? "pending" : isActive ? "active" : ""   } >Community
      </NavLink></li>
     <li className="px-4 py-2"> <NavLink to="blog" className={({ isActive, isPending }) =>  
       isPending ? "pending" : isActive ? "active" : ""   } > Blogs
      </NavLink> </li>

      <li className="px-4 py-2"><NavLink to="contact" className={({ isActive, isPending }) =>  
       isPending ? "pending" : isActive ? "active" : ""   } >Contact Us
      </NavLink></li>
       
      </>
    
    
    const { user, logOut } = useAuth();
    return (
        <>
        <div className="navbar  lg:w-full bg-red-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Menus />
                    </ul>
                </div>
                <img src="https://i.ibb.co/86yWh4J/Tourist-logo.webp" alt="" className="w-10 h-10" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Menus />
                </ul>
            </div>


            {/* avatar part  */}
            <div className="navbar-end ">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                         {/* <Avater></Avater> */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.email}</button>
                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                >Logout</button>
                            </li>
                           <Link to='/dashboard'> <li><button className="btn btn-sm  btn-ghost">Dashboard</button></li></Link>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost">Login</button>
                        </Link>
                }
            </div>
        </div>
    </>
    );
};

export default Navbar;