import img from "../../../public/register.png";
import logo from "../../../public/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import userImg from "../../../public/user.png";

import bg from "../../../public/smLogo.png"

const Register = () => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const { createUser } = useContext(ContextProvider);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Form data: ", data);
  
   
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
  
  
    if (!data.terms) {
      toast.error("You must accept the terms of service");
      return;
    }
  
    try {
      const result = await createUser(data.email, data.password);
      console.log("Firebase user creation result: ", result);
  
      if (result.user) {
        await updateProfile(auth.currentUser, {
          displayName: data.username,
          photoURL: userImg,
        });
        console.log("User profile updated");
        toast.success('User created successfully!');
        navigate('/');
      }
    } catch (error) {
      console.error("Error during user creation or profile update: ", error);
      toast.error(error.message);
    }
  };
  

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const backgroundImageStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
};

  return (
    <div>
      <div className="hidden lg:block">
       <div className="flex items-center justify-between mt-10 gap-5">
      <div className="flex-1 ml-5">
        <img src={logo} alt="" className="" />
        <h1 className="font-semibold mt-5 mb-2 text-xl">Sign In To Your Account</h1>
        <p className="mb-3">
          Welcome Back! By clicking the sign-up button, you agree to Zenitoods
          Terms and Service and acknowledge the{" "}
          <Link className="text-blue-500 underline">
            Privacy and Policy
          </Link>
        </p>

        {/* register form */}
        <div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username" className="block text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="username"
                {...register('username', { required: 'Username is required' })}
                className={`w-[400px] p-2 border block rounded ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="@username"
              />
              {errors.username && <span className="text-red-700 text-sm">{errors.username.message}</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register('email', { required: 'Email is required' })}
                className={`w-[400px] p-2 border block rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            <div className="mb-3 relative w-[400px]">
              <label htmlFor="password" className="block text-sm font-bold mb-2">Password</label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
                className={`w-[400px] p-2 block border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              <span
                className="absolute top-10 right-2 cursor-pointer"
                onClick={() => {
                  setShowPass(!showPass);
                  setValue('password', password);
                }}
              >
                {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <div className="mb-3 relative w-[400px]">
              <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2">Confirm Password</label>
              <input
                type={showConfirmPass ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-type password"
                {...register('confirmPassword', { required: 'Confirm Password is required' })}
                className={`w-[400px] p-2 block border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
              <span
                className="absolute top-10 right-2 cursor-pointer"
                onClick={() => {
                  setShowConfirmPass(!showConfirmPass);
                  setValue('confirmPassword', confirmPassword);
                }}
              >
                {showConfirmPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="terms"
                {...register('terms', { required: 'You must accept the terms of service' })}
                className="rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-blue-500">Accept Terms of Service</label>
            </div>

            <div className="w-[400px] mx-auto">
              <button
                type="submit"
                className="w-[200px] bg-[#4285F3] text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              >
                Sign Up
              </button>
              <h1 className="mt-5 font-[Poppins]">
                Already Have an Account?{" "}
                <Link className="text-blue-700 font-medium underline" to='/login'>
                  Log in
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>

      {/* image div */}
      <div className="flex-1 relative">
        <img src={img} alt="" className="h-[450px] w-[450px]" />
        <div className="bg-[#152A16] w-[200px] h-[80px] flex flex-col items-center justify-center absolute top-[47%] left-[21%] rounded">
          <h1 className="text-[#156BCA]">Create Account</h1>
          <p className="text-[#fff]">Fill in Your Information</p>
        </div>
      </div>
    </div>
      </div>

      <div className="lg:hidden" style={backgroundImageStyle}>
       <div className="pt-10 text-center">
       <div className="flex justify-center"><img src={logo} alt="" className="" /></div>
       <h1 className="font-semibold mt-5 mb-2 text-xl">Sign In To Your Account</h1>
       <p className="mb-3 text-white w-[90%]">
          Welcome Back! By clicking the sign-up button, you agree to Zenitoods
          Terms and Service and acknowledge the{" "}
          <Link className="text-blue-800 underline">
            Privacy and Policy
          </Link>
        </p>
        <div className=" flex justify-center">
        <div className="bg-[#1F2833] w-[200px] h-[80px] flex flex-col items-center justify-center rounded">
          <Link to="/register2"><h1 className="text-[#156BCA]">Create Account</h1></Link>
          <p className="text-[#fff]">Fill in Your Information</p>
        </div>
      </div>
     </div>
      </div>

      
      
    </div>

    
  );
};

export default Register;
