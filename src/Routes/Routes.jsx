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
import DetailsStory from "../Components/AllStory/DetailsStory";
import AddBooking from "../Components/AddBooking/Addbooking";
import AdminRoute from "../Hook/AdminRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/Cart/AdminHome";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Community from "../Components/Navbar/Community";
import Blog from "../Components/Navbar/Blog";
import Contact from "../Components/Navbar/Contact";
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
        path:'community',
        element:<Community></Community>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path: "/details/:_id",
        element:<Details></Details>
      },
      {
        path:'/package',
        element:<Packages></Packages>,
        loader:() => fetch('https://assignment-12-server-opal-seven.vercel.app/package'),

      },
      {
        path:'meetGuide',
        element:<MeetGuide></MeetGuide>
      },
      {
        path:'tourGuideProfile',
        element:<TourGuideProfile></TourGuideProfile>
      },
      {
        path:'/detailStory/:_id',
        element:<DetailsStory></DetailsStory>  
      }
      ,{
        path:'booking',
        element:<AddBooking></AddBooking>
      }
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      //Admin routes
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'users',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path:'addPackage',
        element:<AdminRoute><AddCart></AddCart></AdminRoute>
      },
      // user
      {
        path:'userHome',
        element:<UserHome></UserHome>
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
