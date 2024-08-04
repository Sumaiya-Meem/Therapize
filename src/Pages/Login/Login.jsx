import img from "../../../public/register.png";
import logo from "../../../public/logo.png";
import google from "../../../public/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye ,FaFacebookF } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ContextProvider } from "../../Context/AuthProvider";

const Login = () => {
  const { signInUser, signInGoogle } = useContext(ContextProvider);
  const location =useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            toast.success('Sign in successfully');
            navigate(location?.state ? location.state:'/');
        })
        .catch(error => {
            toast.error(error.message);
        });
};


  const password = watch("password", "");

  const handleGoogle = () => {
    signInGoogle()
    .then(res=>{
      console.log(res.user);
      navigate(location?.state ? location.state:'/');
    })
    .catch(error=>{
      console.log(error.message)
    })
};

  return (
    <div className="flex items-center justify-between mt-10 gap-5">
      <div className="flex-1 ml-5">
        <img src={logo} alt="" className="" />
        <h1 className="font-semibold mt-5 mb-2 text-xl">
          Log In To Your Account
        </h1>
        <p className="mb-3">
        Welcome Back! Select a method to log in:
        </p>

        <div className="flex justify-between w-[400px] my-7 items-center">
               <button className="bg-gradient-to-r from-[#E4E4E4] to-[#fafafa] flex items-center gap-1 w-[120px] h-[40px] px-2 rounded-md" onClick={handleGoogle}>
                <img src={google} alt="" />
                <h1>Google</h1>
               </button>

               <button className="text-white bg-gradient-to-r from-[#298FFF] to-[#0778F5] flex items-center gap-1 w-[150px] h-[40px] px-2 justify-center rounded-md">
                <FaFacebookF></FaFacebookF>
                <h1>Facebook</h1>
               </button>
        </div>
        <div className="w-[400px] my-4">
                  <p className="text-center text-sm font-[Poppins]">Or Continue with Email</p>
        </div>

        {/* register form */}
        <div>
          <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
           
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
                className={`w-[400px] p-2 border block rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-3 relative w-[400px]">
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
                className={`w-[400px] p-2 block border rounded ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              <span
                className="absolute top-10 right-2 cursor-pointer"
                onClick={() => {
                  setShowPass(!showPass);
                  setValue("password", password);
                }}
              >
                {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

           
            <div className="mb-4 w-[400px] flex justify-between">
              <div><input type="checkbox" name="terms" id=""  className="rounded"/>
              <label htmlFor="terms" className="ml-2 text-sm ">
              Remember me
              </label></div>
              <p className="font-medium text-sm text-blue-500 underline">Forgot password?</p>
            </div>

            <div className="w-[400px] mx-auto">
              <button
                type="submit"
                className="w-[200px] bg-[#156BCA] text-white px-4 py-2 rounded  focus:outline-none focus:shadow-outline-blue"
              >
                Sign in
              </button>
              <h1 className="mt-5 font-[Poppins]">
              Don’t Have an Account?  
                <Link
                  className="ml-1 text-blue-700 font-medium underline"
                  to="/register"
                >
                  Create Account
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
          <h1 className="text-[#fff] text-center"><span className="text-[#156BCA]">Sign In</span> to view all the massage therapists</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
