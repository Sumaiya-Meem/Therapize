/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextProvider } from "../../Context/AuthProvider";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(ContextProvider);
    const location =useLocation();
//     console.log(location)
    if(loading){
        return  <Spinner color="failure" aria-label="Failure spinner example" size="xl"/>;
    }
    if(user){
          return children;
    }
    
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;