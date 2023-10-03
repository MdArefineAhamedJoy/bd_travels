import React from "react";
import { FaBangladeshiTakaSign, FaFacebook, FaTwitter } from "react-icons/fa6";


const ToursData = ({ tourData }) => {
  const {
    image,
    location,
    description,
    package: packages,
    tours,
    name,
    activities,
    types,
    tourType
  } = tourData;
  return (
    <div className="bg-base-100">
      <div className="bg-base-100 p-0 my-8 relative">
        <div className="md:flex flex-col lg:flex-row">
          <div className="">
            <img
              src={image}
              className="max-w-sm h-[300px] w-60 rounded shadow-md"
            />
          </div>
          <div className="p-3 py-0">
            <h1 className="text-2xl font-bold text-black">{name}</h1>
            <p>{packages?.rating}</p>
            <div className="">
              <p className="py-5">{description?.slice(0, 240)}.</p>
              <div className="grid grid-cols-4 pt-5">
                <p>{packages.persons}</p>
                <p>{packages.days}</p>
                <p>{tourType}</p>
                {
                  activities === true ? <p>{activities}</p> : <p>{types}</p>
                }
              </div>
              <div className="border-y-2 absolute md:w-[70%] w-full flex justify-between  py-3  bottom-0">
                <div className="flex items-center"><FaBangladeshiTakaSign/> {packages.price} Per Person </div>
                <div className="flex items-center gap-5 pe-3">
                  <FaFacebook/>
                  <FaTwitter/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursData;
