import { Outlet} from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";
import Menubar from "./Menubar/Menubar";
import Header from "../Header/Header";

const MainLayout = () => {
                  const [open,setOpen] = useState(false);
    return (
                  <div className="grid grid-cols-10">
                  <div className="lg:col-span-2 md:col-span-3 hidden md:block"><Menubar></Menubar>
                  </div>
      
                  
                          <div className="absolute z-10 md:hidden w-full" >
                              <summary onClick={()=> setOpen(!open)} className="bg-white px-2 rounder-t-md text-gray-100 text-2xl py-2">{
                                 open? <RiCloseFill></RiCloseFill>:<IoMdMenu></IoMdMenu>
      
                              }</summary>
                  
                                      <div onClick={()=> setOpen(!open)} className={open? 'block' : 'hidden'}><Menubar></Menubar></div> 
                          </div>
                      
                  
                  
                  <div className="lg:col-span-8 mt-9 md:mt-0 col-span-10 md:col-span-7 bg-slate-200">
                                    <Header></Header>
                                    <Outlet></Outlet>
                  </div>
              </div>
    );
};

export default MainLayout;