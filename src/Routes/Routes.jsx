import { createBrowserRouter } from "react-router-dom"
import SingUp from '../Pages/SingUp/SingUp'
import Login from "../Pages/Login/Login";
// import Details from "../TabSection/DetailsCard/Details";
import Package from "../TabSection/Package";
import Main from "../Layout/Main";
import Details from "../TabSection/DetailsCard/Details";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Packages from "../Pages/AllPackage/Packages";
import AllUser from "../Layout/Dashboard/AllUser/AllUser";
import AddCart from "../Layout/Dashboard/AddPackage/AddCart";
import UserProfile from "../Layout/Dashboard/UserProfile/UserProfile";
import UserBooking from "../Layout/Dashboard/Booking/UserBooking";
import MeetGuide from "../Components/MeetGuide/MeetGuide";
import TourGuideProfile from "../Components/MeetGuide/TourGuideProfile";
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
        element:<Details></Details>
      },
      {
        path:'/package',
        element:<Packages></Packages>,
        loader:() => fetch('http://localhost:5000/package'),

      },
      {
        path:'meetGuide',
        element:<MeetGuide></MeetGuide>
      },
      {
        path:'tourGuideProfile',
        element:<TourGuideProfile></TourGuideProfile>
      }
    ],
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      //Admin routes
      {
        path:'users',
        element:<AllUser></AllUser>
      },
      {
        path:'addPackage',
        element:<AddCart></AddCart>
      },
      {
        path:'userProfile',
        element:<UserProfile></UserProfile>
      },
      {
        path:'userBooking',
        element:<UserBooking></UserBooking>
      }
 
    ]

  }
]);

export default router;
