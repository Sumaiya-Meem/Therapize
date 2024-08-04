
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import NewList from "../AddNewList/NewList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import TherapistDetails from "../Home/TherapistDetails/TherapistDetails";

  
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
        element: <NewList></NewList>,
        },   
        {
         path: "/therapistDetails/:id",
         element: <PrivateRoute><TherapistDetails></TherapistDetails></PrivateRoute>,
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