import img1 from "../../../public/homeImg1.png";
import img2 from "../../../public/homeImg2.png";

const Home = () => {
return (
<div>
   <div className="flex bg-white m-5 rounded p-2">
       <div className="flex-1">
              <h1 className="font-semibold my-3">I'm Looking for Massage Therapist Near...</h1>
              <p className="text-sm my-3">In using this site, I agree to be bound by the <span className="text-blue-500 font-medium">Terms of Service </span> 
              <br></br>and  <span className="text-blue-500 font-medium">Privacy Policy </span> 
               </p>
              <div className="relative mt-7 w-[400px]">
                     <input type="search" name="" id="" className="bg-[#EEF2F5] w-3/4 border-none rounded"  placeholder="ZIP code or city name "/>
                     <button className="bg-[#156BCA] w-[60px] h-[40px] rounded-lg absolute  right-[100px] text-white">Go</button>
              </div>
       </div>

       <div className="flex relative">
        <img src={img2} alt=""  className=" mr-14"/>
        <img src={img1} alt="" className="w-[250px] right-5 absolute "/>
             
       </div>
   </div> 

   <div className="m-5">
       <h1 className="font-[Poppins]">Featured Therapist</h1>
   </div>                                           
</div>
);
};

export default Home;