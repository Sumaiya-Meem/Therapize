import { Link, NavLink } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import logo from "../../../../public/logo.png";
import { CiSearch, CiHeart, CiSquareInfo, CiSettings } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Avatar, Dropdown } from "flowbite-react"; // Import Avatar if you use it
import { CgLogOut } from "react-icons/cg";
import { useContext } from "react";
import { ContextProvider } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";

const Menubar = () => {
  const { logOutUser, user } = useContext(ContextProvider);
  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("sign out successfully");
    });
  };
  return (
    <div className="lg:min-h-screen h-full font-[Poppins] dark:bg-[#212130] bg-white p-4">
      <div className="my-6 flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-[30px] w-[60px]" />
      </div>
      <div className="lg:hidden flex items-center justify-between mb-4">
      {
            user ? <>
            <Avatar alt="User image" img={user?.photoURL} rounded />
          <div className="flex flex-col">
            <span className="block text-sm">{user?.displayName}</span>
            <span className="block text-sm font-medium">{user?.email}</span>
          </div>
          <Dropdown inline={true}>
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
            </>
            :
            <>
            
            </>
          }
        {/* {user ? (
          <button className="bg-[#fbc0b8] p-1 rounded-[50%]" onClick={handleLogout}>
            <CgLogOut className="transform rotate-180 text-lg text-[#F15E4A]" />
          </button>
        ) : (
          <Link to="/register">
            <button className="text-[#F15E4A] font-semibold">Signup</button>
          </Link>
        )} */}
      </div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <MdOutlineDashboard />
        Home
      </NavLink>
      <NavLink
        to="/newList"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <GoPeople />
        New Listing
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <CiSearch />
        Search
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <IoDocumentTextOutline />
        About
      </NavLink>
      <NavLink
        to="/favourite"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <CiHeart />
        Favorites
      </NavLink>
      <div className="h-[1px] bg-[#E7E7E7] w-[210px] mx-auto my-4" />
      <NavLink
        to="/helpCenter"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <CiSquareInfo />
        Help Center
      </NavLink>
      <NavLink
        to="/setting"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 pl-3 capitalize text-base ${
            isActive ? "border-l-4 border-[#102C4A] font-bold bg-[#D4E9FF]" : ""
          }`
        }
      >
        <CiSettings />
        Settings
      </NavLink>
    </div>
  );
};

export default Menubar;
