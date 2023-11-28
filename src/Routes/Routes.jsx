import { createBrowserRouter } from "react-router-dom"
import SingUp from '../Pages/SingUp/SingUp'
import Login from "../Pages/Login/Login";
// import Details from "../TabSection/DetailsCard/Details";
import Package from "../TabSection/Package";
import Main from "../Layout/Main";
import Details from "../TabSection/DetailsCard/Details";
import Home from "../Pages/Home/Home";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path: "/singup",
        element:<SingUp></SingUp>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/details/:_id",
        loader: ({params}) => fetch(`http://localhost:5000/package/${params._id}`),
        element:<Details></Details>
      },
      {
        path:'/package',
        element:<Package></Package>,
        loader:() => fetch('http://localhost:5000/package'),

      }
    ],
  },
]);

export default router;
