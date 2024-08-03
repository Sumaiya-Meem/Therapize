import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import logo from "../../../../public/logo.png";
const Menubar = () => {
  return (
    <div className="lg:min-h-screen h-full  dark:bg-[#212130]  bg-white">
      <div className="my-6 flex items-center justify-center ">
          <img src={logo} alt="" className="h-[30px] w-[60px]" />
      <div>
        </div>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 uppercase font-semibold text-base ${isActive ? "border-l-2 border-[#102C4A] bg-[#D4E9FF]" : ""}`
        }
      >
        <MdOutlineDashboard />
        Home
      </NavLink>
      
      <NavLink to="/newList"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 uppercase font-semibold text-base ${isActive ? "border-l-2 border-[#102C4A] bg-[#D4E9FF]" : ""}`
                }
      >
       
          <GoPeople />
          New Listing
      </NavLink>
    </div>
  );
};

export default Menubar;
