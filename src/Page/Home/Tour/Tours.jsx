import React, { useEffect, useState } from "react";
import ToursData from "./ToursData";
import { BsSearch } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";

const Tours = () => {
  const [AllTours, setAllTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((response) => response.json())
      .then((data) => setAllTours(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto flex">
      <section className="w-9/12 bg-base-100">
        <div className="flex justify-between border-b-2 pb-2 ">
          <div className="md:flex gap-5 w-8/12">
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </div>
          <div className="w-3/12 flex gap-5 justify-center">
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </div>
        </div>
        {AllTours.map((tourData) => (
          <ToursData key={tourData?._id} tourData={tourData}></ToursData>
        ))}
      </section>
      <section className="w-3/12 bg-gray-100 p-5 pt-10">
        <h3 className="text-xl font-bold">Finds Your Destination</h3>
        <p className="pb-5">Discover the world</p>
        <div>
          <div class="relative w-full">
            <input
              class="border-2 font-bold focus:outline-none p-1 px-2 pe-9 my-2 w-full bg-transparent rounded"
              type="text"
              placeholder="Search..."
            />
            <button
              class="absolute right-[0px] top-0 bottom-0 h-full  px-2 pe-3 text-gray-600 "
              type="button"
            >
              <div>
                <BsSearch />
              </div>
            </button>
          </div>
          <div class="relative w-full">
            <input
              class="border-2 focus:outline-none p-1 font-bold px-2 pe-9 my-2 w-full bg-transparent rounded"
              type="text"
              placeholder="Destination"
            />
            <button
              class="absolute right-[0px] top-0 bottom-0 h-full  px-2 pe-3 text-gray-600 "
              type="button"
            >
              <div>
                <GiWorld />
              </div>
            </button>
          </div>

          <div class="relative">
            <select class="w-full p-2 appearance-none border border-gray-300 rounded outline-none ">
              <option value="00" selected>
                Month
              </option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="October">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <button
              class="absolute right-0 top-0 bottom-0 h-full px-2 pe-3 text-gray-600"
              type="button"
            >
              <div>
                <AiFillCalendar />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
