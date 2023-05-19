
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './Header'
import Body from './Body'
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './About';
import Error from './Error'
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./ProfileClass";



const AppLayout = () => {
  return (
    <>
    <HeaderComponent/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {path: "/",
  element: <AppLayout />,
  errorElement: <Error/>,
  children: [
    {
      path: "/",
      element: <Body/>
    },
    {
      path: "/about",
      element: <About/>,
      children: [{
        path: "profile",
        element:<Profile/>
      }]
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/restaurant/:id",
      element: <RestaurantMenu/>
    }
  ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
