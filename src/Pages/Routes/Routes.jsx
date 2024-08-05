
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import NewList from "../AddNewList/NewList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import TherapistDetails from "../Home/TherapistDetails/TherapistDetails";
import Register2 from "../Register/sdRegister/Register2";
import Login2 from "../Login/Login2/Login2";
import About from "../About/About";
import SearchPage from "../SearchPage/SearchPage";
import Favorite from "../Favorite/Favorite";
import HelpCenterPage from "../HelpCenterPage/HelpCenterPage";
import Setting from "../Setting/Setting";

  
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
                  path: "/about",
                  element: <About></About>,
        },  
        {
                  path: "/search",
                  element: <SearchPage></SearchPage>,
        }, 
        {
                  path: "/favourite",
                  element: <Favorite></Favorite>,
        }, 
        {
                  path: "/helpCenter",
                  element: <HelpCenterPage></HelpCenterPage>,
        }, 
        {
                  path: "/setting",
                  element:<Setting></Setting> ,
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
                  path: "/login2",
                  element: <Login2></Login2>, 
                },
        {
          path: "/register",
          element: <Register></Register>, 
        },
        {
                  path: "/register2",
                  element:<Register2></Register2>, 
                },
         
      ]
      },
  ]);

export default router ;