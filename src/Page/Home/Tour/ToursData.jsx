import React from "react";

const ToursData = ({ tourData }) => {
  console.log(tourData);
  const { image, location, description, package: packages, tours, name } = tourData;
  console.log(image);
  return (
    <div className="bg-base-100">
      <div className=" bg-base-100 p-0 my-5">
        <div className="md:flex flex-col  lg:flex-row ">
          <div className="">
            <img src={image} className="max-w-sm h-80 w-60 rounded shadow-md" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-black">{name}</h1>
            <p className="py-6">{description}.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursData;
