import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsFillPersonFill } from "react-icons/bs";
import { SlReload } from "react-icons/sl";

const AllTour = () => {
  const [activeColor, setActiveColor] = useState(false);
  const [toursData, setToursData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tours")
      .then((response) => response.json())
      .then((data) => setToursData(data));
  }, []);
  return (
    <div className="mt-32">
      <div className="text-center w-9/12 mx-auto">
        <h1 className=" text-4xl pb-6">Find Your Perfect Tour</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin ">
          Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum.
          Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In
          sed viverra dui. Suspendisse laoreet velit at eros eleifend.
        </p>
      </div>
      <section className="mt-14">
        <Tabs>
          <TabList className="flex justify-center gap-5">
            <Tab className="focus:outline-none cursor-pointer text-neutral-700 font-semibold">
              All
            </Tab>
            <Tab className="focus:outline-none cursor-pointer text-neutral-700 font-semibold">
              BUDGET FRIENDLY
            </Tab>
            <Tab className="focus:outline-none cursor-pointer text-neutral-700 font-semibold">
              EXPANSIVE TOURS
            </Tab>
            <Tab className="focus:outline-none cursor-pointer text-neutral-700 font-semibold">
              RECOMMENDED
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {toursData.map(({ image, name, packages, description }) => (
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
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
      <section className="w-10/12 mx-auto pt-20">
        <p className="text-center text-xl font-thin leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae condimentum egestas, <br /> libero dolor auctor
          tellus, eu consectetur neque elit quis nunc. Cras elementum pretium.
        </p>
        <div className=" pt-10 w-52 mx-auto">
          <button className="uppercase btn w-full ">view all tours</button>
        </div>
      </section>
    </div>
  );
};

export default AllTour;
