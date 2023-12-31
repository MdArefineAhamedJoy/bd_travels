import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Tours from "../Page/Home/TourPage/Tours";
import About from "../Page/Home/AboutPage/About";
import BlogPage from "../Page/Home/BlogPage.jsx/BlogPage";
import DestinationPage from "../Page/Home/DestinationPage/DestinationPage";
import ShopPage from "../Page/Home/ShopPage/ShopPage";
import Login from "../Components/Login";




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
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path : "/blog",
          element: <BlogPage></BlogPage>
        },
        {
          path: "destination",
          element: <DestinationPage></DestinationPage>
        },
        {
          path: "shop",
          element: <ShopPage></ShopPage>
        },
        {
          path: "login",
          element: <Login></Login>
        }
    ]
  },
]);

export default router