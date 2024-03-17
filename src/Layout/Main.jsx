
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className=" font-serif">
           
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Main;