import Slider from "react-slick";
import img1 from "../../../public/homeImg1.png";
import img2 from "../../../public/homeImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './therapist.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [therapist, setTherapist] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [city, setCity] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchedTherapists, setSearchedTherapists] = useState([]);
  const [searchedTestimonials, setSearchedTestimonials] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const therapistResponse = await axios.get("/therapist.json");
        const testimonialResponse = await axios.get("/testimonial.json");
        const cityResponse = await axios.get("/city.json");
  
        console.log("Therapist Response:", therapistResponse.data);
        console.log("Testimonial Response:", testimonialResponse.data);
        console.log("City Response:", cityResponse.data);
  
        if (Array.isArray(therapistResponse.data)) {
          setTherapist(therapistResponse.data);
          setSearchedTherapists(therapistResponse.data);
        } else {
          setError("Therapist data is not an array");
        }
  
        if (Array.isArray(testimonialResponse.data)) {
          setTestimonial(testimonialResponse.data);
          setSearchedTestimonials(testimonialResponse.data);
        } else {
          setError("Testimonial data is not an array");
        }
  
        if (Array.isArray(cityResponse.data)) {
          setCity(cityResponse.data);
        } else {
          setError("City data is not an array");
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(city);

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

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchCity(searchTerm);

    const searchedTherapists = therapist.filter((data) =>
      data.city.toLowerCase().includes(searchTerm)
    );
    setSearchedTherapists(searchedTherapists);

    const searchedTestimonials = testimonial.filter((data) =>
      data.city.toLowerCase().includes(searchTerm)
    );
    setSearchedTestimonials(searchedTestimonials);
  };

  const handleCity = (cityName) => {
    const searchedTherapists = therapist.filter((data) =>
      data.city.toLowerCase() === cityName.toLowerCase()
    );
    setSearchedTherapists(searchedTherapists);

    const searchedTestimonials = testimonial.filter((data) =>
      data.city.toLowerCase() === cityName.toLowerCase()
    );
    setSearchedTestimonials(searchedTestimonials);
  };

  const therapistSettings = {
    dots: false,
    infinite: searchedTherapists.length > 3,
    speed: 500,
    slidesToShow: searchedTherapists.length < 2 ? 1 : 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: searchedTherapists.length > 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: searchedTherapists.length < 2 ? 1 : 3,
          slidesToScroll: 1,
          infinite: searchedTherapists.length > 3,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: searchedTherapists.length < 2 ? 1 : 1,
          slidesToScroll: 1,
          infinite: searchedTherapists.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  const testimonialSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    vertical: true,
    verticalSwiping: true,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(city)

  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-white m-5 rounded p-2 w-[390px] lg:w-auto h-auto">
        <div className="flex-1 order-1">
          <h1 className="font-semibold my-3">I'm Looking for Massage Therapist Near...</h1>
          <p className="text-sm my-3">
            In using this site, I agree to be bound by the <span className="text-blue-500 font-medium underline">Terms of Service</span> 
            <br />
            and <span className="text-blue-500 font-medium underline">Privacy Policy</span>
          </p>
          <div className="relative mt-7 w-full lg:w-[400px]">
            <input
              type="search"
              name=""
              id=""
              className="bg-[#EEF2F5] w-full lg:w-3/4 border-none rounded pl-3 pr-[80px] h-[40px]"
              placeholder="ZIP code or city name"
              onChange={handleSearch}
            />
            <button className="bg-[#156BCA] w-[80px] lg:w-[60px] h-[40px] rounded-lg absolute right-0 lg:right-[100px] text-white">Go</button>
          </div>
        </div>
        <div className="flex-1 order-2 lg:order-1 flex flex-col lg:flex-row mt-5 lg:mt-0 relative justify-center lg:justify-end">
          <img src={img2} alt="" className="hidden lg:block mr-0 lg:mr-14 w-[80px] lg:w-auto mb-5 lg:mb-0" />
          <img src={img1} alt="" className="w-[150px] lg:w-[250px]" />
        </div>
      </div>

      <div className="m-5">
        <h1 className="font-[Poppins] text-xl font-medium my-3">Featured Therapist</h1>
        <div className="md:w-[95%] w-[80%] mx-auto bg-white">
          <Slider {...therapistSettings}>
            {Array.isArray(searchedTherapists) && searchedTherapists.length > 0 ? (
              searchedTherapists.map((data) => (
                <div key={data.id} className="bg-white mx-2 my-10 h-[345px] rounded-xl max-w-[350px] border-[1px]">
                  <img src={data.image} alt="" className="w-full h-[200px] p-2" />
                  <div className="flex flex-col justify-center gap-2 p-2">
                    <h1 className="font-bold">{data.therapistName}</h1>
                    <div className="flex gap-1 items-center">
                      <FaLocationDot className="text-sm text-[#5C635A]" />
                      <h1 className="text-sm text-[#5C635A]">{data.city}, {data.country}</h1>
                    </div>
                    <div className="flex text-[#5C635A] items-center gap-1">
                      <FaCar />
                      <p className="text-sm">{data.chamber}</p>
                    </div>
                  </div>
                  <div className="bg-[#D4E9FF] hover:bg-[#156BCA] hover:text-white font-medium py-3 rounded-b-md text-center">
                    <Link to={`/therapistDetails/${data.id}`}>
                      <p><u>See Details</u></p>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No therapists found for the searched city.</p>
            )}
          </Slider>
        </div>
      </div>

      <div className="m-5 flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex-1">
          <h1 className="font-medium text-xl"> Featured Testimonial</h1>
          <div className="mt-5 lg:w-[500px] w-auto bg-white rounded-md testimonial-slider">
          {Array.isArray(searchedTestimonials) && searchedTestimonials.length > 0 ?(
              <Slider {...testimonialSettings}>
                {searchedTestimonials.map((data) => (
                  <div key={data.id} className="flex p-4 my-3 border-[1px] ml-2 rounded">
                    <div className="flex gap-2">
                      <div><img src={data.image} alt="" /></div>
                      <div>
                        <div className="flex gap-1 items-center">
                          <FaLocationDot className="text-sm text-[#5C635A]" />
                          <h1 className="text-sm text-[#5C635A]">{data.city}, {data.country}</h1>
                        </div>
                        <div className="flex gap-1 items-center">
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
            ) : (
              <p className="text-center text-gray-600">No testimonials found for the searched city.</p>
            )}
          </div>
        </div>
        <div className="flex-1">
  <h1 className="font-medium text-xl font-[Poppins]">Popular Cities</h1>
  <div className="bg-white rounded-md">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 p-5 mt-5">
      {Array.isArray(city) && city.length > 0 ? (
        city.map((data, index) => (
          <React.Fragment key={index}>
            <h1
              className="underline text-[#156BCA] font-[Poppins] cursor-pointer"
              onClick={() => handleCity(data.city)}
            >
              {data.city}, {data.country}
            </h1>
            {(index + 1) % 3 === 0 && (
              <div className="col-span-full h-[1px] bg-[#E7E7E7] my-2"></div>
            )}
          </React.Fragment>
        ))
      ) : (
        <p className="text-center text-gray-600">Loading cities...</p>
      )}
    </div>
  </div>
</div>

      </div>   
    </div>
  );
};

export default Home;
