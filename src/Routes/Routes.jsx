import { createBrowserRouter} from "react-router-dom";
  import Main from "../Layout/Main"; 
import SingUp from "../Pages/SingUp/Singup";
import Login from "../Pages/Login/Login";
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
              path:'singup',
              element:<SingUp></SingUp>
            },
            {
                path:'login',
                element:<Login></Login>
            }
          ]
        },
      ]);


export default router;