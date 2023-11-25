import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes';
import './index.css'
import { RouterProvider} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="w-[1300px] mx-auto">
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     </div>
  </React.StrictMode>,
)
