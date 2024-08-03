
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import NewList from "../AddNewList/NewList";

  
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
            
//         {
//           path: "/login",
//           element: <Login></Login>, 
//         },
//         {
//           path: "/registration",
//           element: <Register></Register>, 
//         },
         
      ]
      },
  ]);

export default router ;