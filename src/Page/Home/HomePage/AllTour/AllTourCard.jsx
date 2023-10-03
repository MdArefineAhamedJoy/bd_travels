import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { SlReload } from "react-icons/sl";
const AllTourCard = ({ tours }) => {
  const { image, name, package:packages, description } = tours;
  return (
    <div className="card  bg-base-100 shadow-xl rounded-none">
      <figure>
        <img className="h-56 w-full" src={image} alt="" />
      </figure>

      <div className="py-4 px-5 ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-xl font-bold">${packages?.price}</p>
        </div>
        <p className="py-3">{packages?.rating}</p>
        <p className="">{description.slice(0, 80)}</p>
        <div className="divider"></div>
        <div className="flex gap-5 ">
          <p className="flex items-center gap-2">
            <SlReload /> {packages?.days} Days
          </p>
          <p className="flex items-center ">
            <BsFillPersonFill />
            {packages?.persons} Persons
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllTourCard;
