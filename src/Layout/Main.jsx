import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "../Pages/Home/Home";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <h2 className="text-red-400">This is main</h2>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Main;