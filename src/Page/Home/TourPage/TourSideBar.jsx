import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { GiWorld } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";

const TourSideBar = () => {
    const [value, setValue] = useState(0);
    const [checkBoxes, setCheckBoxes] = useState({
      Recommended: false,
       Beget_Friendly: false,
      Escort_tours: false,
      City_Sightseeing: false,
      Historical_Building: false,
      Eastern_World: false,
      Beaches: false,
      Museum_Tors: false,
      Meals_Included: false,
      Cruises: false,
      Air_Rides: false,
      Volcano_Adventures: false,
      Romantic: false,
      Hiking_Adventures: false,
      Group_Tours: false,
    });
  
    const handleCheckBoxChange = (event) => {
      const { name, checked } = event.target;
      setCheckBoxes({ ...checkBoxes, [name] : checked});
    };
  
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setValue(value);
    };
  
    return (
        <div>
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

          <div className=" mx-auto mt-8">
            <input
              type="range"
              min="100"
              max="50000"
              step="100"
              name="ranges"
              className="w-full"
              value={value}
              onChange={handleChange}
            />
            <div className="w-fu mt-3 border-2">
              <p className="mx-auto w-fit p-2">{value} BDT</p>
            </div>
          </div>
          <div>
            <div className="grid mt-5 gap-4">
              {Object.keys(checkBoxes).map((checkbox, index) => (
                <div key={index}>
                <input
                  type="checkbox"
                  name={checkbox}
                  id={checkbox}
                  checked={checkBoxes[checkbox]}
                  onChange={handleCheckBoxChange}
                />
                <label className="font-light" htmlFor={checkbox}> {checkbox.replace("_"," ")}</label>
              </div>
              ))}
              
            </div>
            <button className="btn w-full mt-10">Search</button>
          </div>
        </div>
        </div>
    );
};

export default TourSideBar;