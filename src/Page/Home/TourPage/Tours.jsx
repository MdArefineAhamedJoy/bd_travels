import React, { useEffect, useState } from "react";
import ToursData from "./ToursData";
import TourSideBar from "./TourSideBar";
import { AiOutlineBars , AiOutlineAppstore, AiFillAppstore, AiOutlineArrowDown} from "react-icons/ai";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { BiArrowFromBottom ,BiArrowFromTop } from "react-icons/bi";
import { AiFillCalendar } from "react-icons/ai";

const Tours = () => {
  const [AllTours, setAllTours] = useState([]);

  useEffect(() => {
    fetch("banner.json")
      .then((response) => response.json())
      .then((data) => setAllTours(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto flex mt-20">
      <section className="w-9/12 bg-base-100">
        <div className="flex justify-between items-center  border-b-2 pb-2 ">
          <div className="md:flex justify-between w-8/12  font-semibold">
            <div className="flex items-center gap-x-2"><AiFillCalendar></AiFillCalendar>Date</div>
            <div className="flex items-center gap-x-2"><BiArrowFromBottom></BiArrowFromBottom> <p>Price Low to High</p></div>
            <div className="flex items-center gap-x-2"><BiArrowFromTop></BiArrowFromTop> <p>Price High to Low</p></div>
            <div className="flex items-center gap-x-2"><AiOutlineArrowDown></AiOutlineArrowDown> A-Z Name</div>
          </div>
          <div className="w-2/12 px-4 flex  justify-between">
            <AiOutlineBars className="w-6 h-6"/>
            <AiFillAppstore className="w-6 h-6"/>
            <BsReverseLayoutSidebarReverse className="w-6 h-6"/>
          </div>
        </div>
        {AllTours.map((tourData) => (
          <ToursData key={tourData?._id} tourData={tourData}></ToursData>
        ))}
      </section>
      <section className="w-3/12 bg-gray-100 p-5 pt-10">
        <TourSideBar></TourSideBar>
      </section>
    </div>
  );
};

export default Tours;
