
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
           
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Main;