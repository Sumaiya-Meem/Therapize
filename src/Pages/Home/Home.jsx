import Slider from "react-slick";
import img1 from "../../../public/homeImg1.png";
import img2 from "../../../public/homeImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './therapist.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
       var settings = {
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 0,
              autoplay: true,
              autoplaySpeed: 2000,
              cssEase: "linear",
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    infinite: true,
                    dots: true,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            };
          
            const [therapist, setTherapist] = useState([]);
          
            useEffect(() => {
              const fetchData = async () => {
                const response = await axios.get(
                  "../../../public/therapist.json"
                );
                // console.log(response.data);
                setTherapist(response.data);
              };
          
              fetchData();
            }, []);

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
       <div className="w-[95%] mx-auto">
        <Slider {...settings} >
          {therapist.map((data) => (
            <>
              <div className="bg-white mx-2 my-10  h-[345px] rounded-xl max-w-[350px] border-[1px] ">
                <img src={data.image} alt="" className="w-full h-[200px] p-2" />
                <div className="flex flex-col justify-center  gap-2 p-2">
                <h1 className="font-bold">{data.therapistName}</h1>
                <div className="flex gap-1 items-center  ">
                     <FaLocationDot className=" text-sm text-[#5C635A]"></FaLocationDot>
                  
                  <h1 className=" text-sm text-[#5C635A]">{data.city}{data.country}</h1>
                  </div>
                  
                  <div className="flex text-[#5C635A] items-center gap-1">
                   <FaCar ></FaCar>
                  <p className="text-sm">{data.chamber}</p>
                  </div>
                </div>
                <div className="bg-[#D4E9FF] hover:bg-[#156BCA] hover:text-white font-medium py-3 rounded-b-md text-center">
                <Link to={`/therapistDetails/${data.id}`}>
                <p><u>See Details</u></p>
                </Link>
                </div>
                
              </div>
            </>
          ))}
        </Slider>
        </div>
   </div>                                           
</div>
);
};

export default Home;