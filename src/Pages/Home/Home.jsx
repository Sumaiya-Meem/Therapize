import Slider from "react-slick";
import img1 from "../../../public/homeImg1.png";
import img2 from "../../../public/homeImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './therapist.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
       var settings = {
              dots: false,
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
                    dots: false,
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
            const [testimonial, setTestimonial] = useState([]);
            const [city, setCity] = useState([]);
          
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

            useEffect(() => {
              const fetchData = async () => {
                const response = await axios.get(
                  "../../../public/testimonial.json"
                );
                setTestimonial(response.data);
              };
          
              fetchData();
            }, []);

            useEffect(() => {
              const fetchData = async () => {
                const response = await axios.get(
                  "../../../public/city.json"
                );
                setCity(response.data);
              };
          
              fetchData();
            }, []);

         const testimonialSettings = {
              dots: true,
              speed: 500,
              slidesToShow: 2,
              vertical: true,
              verticalSwiping: true,
            };
            const [expanded, setExpanded] = useState(); 

            const handleReadMore = (id) => {
              setExpanded(expanded === id ? null : id); 
            };
          
            const shortText = (text, wordLimit) => {
              const words = text.split(' ');
              if (words.length <= wordLimit) {
                return text;
              }
              return words.slice(0, wordLimit).join(' ') + '...';
            };
                    

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
       <h1 className="font-[Poppins] text-xl font-medium my-3">Featured Therapist</h1>
       <div className="w-[95%] mx-auto bg-white">
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

   <div className="m-5 flex flex-col lg:flex-row justify-between gap-4">
         <div className="flex-1">
              <h1 className="font-medium text-xl"> Featured Testimonial</h1>
              <div className="mt-5  w-[500px] bg-white rounded-md testimonial-slider">
              <Slider {...testimonialSettings} >
              {testimonial.map((data) => (
                <div key={data.id} className="flex p-4 my-3 border-[1px] ml-2  rounded">
                     <div className="flex gap-2">
                            <div><img src={data.image} alt="" className="" /></div>
                            <div>
                            <div className="flex gap-1 items-center  ">
                     <FaLocationDot className=" text-sm text-[#5C635A]"></FaLocationDot>
                  
                  <h1 className=" text-sm text-[#5C635A]">{data.city}{data.country}</h1>
                  </div>
                  <div className="flex gap-1 items-center  ">
                    <p className="text-[#232F3C] font-medium">{data.massageType}</p> by <span className="text-[#156BCA] italic font-medium">{data.therapistName}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-2">
                    {expanded === data.id
                      ? data.testimonialDescription
                      : shortText(data.testimonialDescription, 12)}
                    {data.testimonialDescription.split(' ').length > 12 && (
                      <span
                        className="text-blue-600 cursor-pointer font-[500]"
                        onClick={() => handleReadMore(data.id)}
                      >
                        {expanded === data.id ? ' Show Less' : ' Read More'}
                      </span>
                    )}
                  </p>
                 
                            </div>
                     </div>
                  

                  
                </div>
              ))}
            </Slider>
              </div>
         </div>
         <div className="flex-1">
              <h1 className="font-medium text-xl">Popular Cities</h1>
              <div className="bg-white rounded-md ">
              <div className="grid grid-cols-2 lg:grid-cols-3 lg:p-5 gap-2 mt-5 ">
              {city.map((data,index) => (
                     <React.Fragment key={index}>
                     <h1 className="underline text-[#156BCA] font-[Poppins]">{data.city}, {data.country}</h1>
                     {(index + 1) % 3 === 0 && (
                       <div className="col-span-3 h-[1px] bg-[#E7E7E7] my-2"></div>
                     )}
                   </React.Fragment>
                     
              ))}
           
              
               </div>
              </div>
         </div>
  </div>   

                                   
</div>
);
};

export default Home;