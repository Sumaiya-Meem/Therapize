
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import NewList from "../AddNewList/NewList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
        path: "/newList",
        element: <PrivateRoute><NewList></NewList></PrivateRoute>,
        },     
        {
          path: "/login",
          element: <Login></Login>, 
        },
        {
          path: "/register",
          element: <Register></Register>, 
        },
         
      ]
      },
  ]);

export default router ;