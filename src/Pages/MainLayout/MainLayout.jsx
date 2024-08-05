import { Link, Outlet, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import Menubar from "./Menubar/Menubar";
import Header from "../Header/Header";
import { ContextProvider } from "../../Context/AuthProvider";
import { CgLogOut } from "react-icons/cg";

const MainLayout = () => {
  const location = useLocation();
  const { user } = useContext(ContextProvider);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("register");
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-10">
      {!noHeaderFooter && (
        <div className="lg:col-span-2 md:col-span-3 hidden md:block">
          <Menubar />
        </div>
      )}
      <div className="absolute z-10 md:hidden w-[60%]">
        <button
          onClick={() => setOpen(!open)}
          className=" px-2 rounded-t-md text-gray-900 text-2xl py-2 cursor-pointer"
        > 
          {open ? <RiCloseFill />  : 
                   <IoMdMenu></IoMdMenu>}
        </button>
        <div onClick={() => setOpen(!open)} className={open ? "block" : "hidden"}>
          <Menubar />
          {!user && (
              <div className="bg-white flex items-center">
                <CgLogOut className="transform rotate-180 text-lg text-[#F15E4A] ml-5 mb-2"></CgLogOut>
                <Link to="/register">
                
                <p className="font-semibold text-red-500 ml-2 mb-2">Signup</p>
              </Link>
              </div>
          )}
        </div>
      </div>
      <div
        className={`${
          noHeaderFooter
            ? "col-span-10 bg-white"
            : "lg:col-span-8 col-span-10 md:col-span-7 bg-slate-200 mt-9 md:mt-0"
        }`}
      >
        {!noHeaderFooter && <div className="md:block hidden"><Header /></div>}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
