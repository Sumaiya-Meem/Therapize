import { NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import logo from "../../../../public/logo.png";
import { CiSearch ,CiHeart , CiSquareInfo,CiSettings} from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";


const Menubar = () => {
  return (
    <div className="lg:min-h-screen h-full font-[Poppins]  dark:bg-[#212130]  bg-white">
      <div className="my-6 flex items-center justify-center ">
          <img src={logo} alt="" className="h-[30px] w-[60px]" />
      <div>
        </div>
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
        }
      >
        <MdOutlineDashboard />
        Home
      </NavLink>
      
      <NavLink to="/newList"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
          <GoPeople />
          New Listing
      </NavLink>
      
      <NavLink to="/search"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
         <CiSearch></CiSearch>
          Search
      </NavLink>
      <NavLink to="/search"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
         <IoDocumentTextOutline></IoDocumentTextOutline>
          About
      </NavLink>
      <NavLink to="/favourite"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
         <CiHeart></CiHeart>
         Favorites
      </NavLink>
      <div className="h-[1px] bg-[#E7E7E7] w-[210px] mx-auto">

      </div>
      
      <NavLink to="/helpCenter"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
         <CiSquareInfo></CiSquareInfo>
         Help Center
      </NavLink>
      <NavLink to="/setting"
       className={({ isActive }) =>
                  `flex items-center gap-3 py-3 lg:pl-6 md:pl-3 capitalize text-base ${isActive ? "border-l-2 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""}`
                }
      >
       
         <CiSettings></CiSettings>
         Settings
      </NavLink>
      
    </div>
  );
};

export default Menubar;
