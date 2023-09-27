import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Tours from "../Page/Home/Tour/Tours";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path : '/',
            element: <Home></Home>
        },
        {
          path : "/tours",
          element: <Tours></Tours>
        }
    ]
  },
]);

export default router