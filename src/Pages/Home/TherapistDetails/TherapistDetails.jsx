// src/components/TherapistDetails/TherapistDetails.js
import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { FaCar, FaLocationDot ,FaRegHeart } from "react-icons/fa6";

const TherapistDetails = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState();

  useEffect(() => {
    const fetchTherapistDetails = async () => {
      const response = await axios.get(`../../../public/therapist.json`);
      const selectedTherapist = response.data.find(therapist => therapist.id === parseInt(id));
      setTherapist(selectedTherapist);
    };

    fetchTherapistDetails();
  }, [id]);

  if (!therapist) {
    return <div><Spinner color="failure" aria-label="Failure spinner example" size="xl"/></div>;
  }

  return (
    <div className="bg-white m-5 p-2">
    <div className="flex flex-col lg:flex-row items-center gap-5">
         <div>
         <img src={therapist.image} alt={therapist.therapistName}  className="h-[200px] w-[500px]"/>
         </div>
         <div className="flex flex-col">
         <h1 className="font-semibold text-xl my-2">{therapist.therapistName}</h1>
         <div className="flex gap-1 items-center my-1 ">
                     <FaLocationDot className=" text-sm text-[#5C635A]"></FaLocationDot>
                  
                  <h1 className=" text-sm text-[#5C635A]">{therapist.city}{therapist.country}</h1>
                  </div>
                  <div className="flex text-[#5C635A] items-center gap-1 my-2">
                   <FaCar ></FaCar>
                  <p className="text-sm">{therapist.chamber}</p>
                  </div>
                  <p className="w-3/4 text-justify text-sm">{therapist.description}</p>

                  <div className="flex my-3 bg-[#156BCA] w-[160px] p-2 rounded-md text-white items-center gap-1">
                  <button><FaRegHeart></FaRegHeart></button>
                  <p>Add to Favorite</p>
                  </div>
      <p></p>
         </div>
      </div>
      
      
    </div>
  );
};

export default TherapistDetails;
