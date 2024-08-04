import { Avatar, Dropdown } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";
// import img from "../../../public/user.png";
import { CgLogOut } from "react-icons/cg";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const { logOutUser, user } = useContext(ContextProvider);
  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("sign out successfully");
    });
  };

  return (
    <div className="bg-white mb-3 p-2 ">
      <div className="flex justify-between items-center">
        <div className="relative flex items-center gap-2 ml-2">
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
          
        </div>
        <div className="flex items-center gap-5 pr-10">
             <div className="bg-slate-100  rounded-[50%] p-2">
             <IoNotificationsOutline></IoNotificationsOutline>
             </div>
              <div className="flex items-center gap-2">
                {
                  user ?
                  <>
                  <button className="text-[#F15E4A] font-semibold" 
                  onClick={handleLogout}
                  >Log Out</button>
                   <div >
                   <button className="bg-[#fbc0b8] p-1 rounded-[50%]" onClick={handleLogout}>
                   <CgLogOut className="transform rotate-180 text-lg text-[#F15E4A]" ></CgLogOut>
                   </button>
                   </div>
                  </>
                  :
                  <>
                  <Link to="/register">
                  <p className="font-semibold">Signup</p> 
                   </Link>
                   <div className="bg-[#fbc0b8] p-1 rounded-[50%]">
                   <CgLogOut className="transform rotate-180 text-lg text-[#F15E4A]"></CgLogOut>
                   </div>
                  </>
                }
                  

                   
              </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
