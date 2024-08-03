import { Avatar, Dropdown } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";
import img from "../../../public/user.png";
import { CgLogOut } from "react-icons/cg";
import { Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white mb-3 p-2 ">
      <div className="flex justify-between items-center">
        <div className="relative flex items-center gap-2 ml-2">
          <Avatar alt="User image" img={img} rounded />
          <div className="flex flex-col">
            <span className="block text-sm">sagar soni</span>
            <span className="block text-sm font-medium">sagar@gmail.com</span>
          </div>
          <Dropdown inline={true}>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex items-center gap-5 pr-10">
             <div className="bg-slate-100  rounded-[50%] p-2">
             <IoNotificationsOutline></IoNotificationsOutline>
             </div>
              <div className="flex items-center gap-2">
                  <h1 className="text-[#F15E4A] font-semibold">Log Out</h1>
                   <div className="bg-[#fbc0b8] p-1 rounded-[50%]">
                   <CgLogOut className="transform rotate-180 text-lg text-[#F15E4A]"></CgLogOut>
                   </div>
                   <Link to="/register">
                  <p className="font-semibold">Signup</p> 
                   </Link>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
