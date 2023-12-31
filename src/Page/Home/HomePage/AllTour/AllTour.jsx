import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsFillPersonFill } from "react-icons/bs";
import { SlReload } from "react-icons/sl";
import AllTourCard from "./AllTourCard";
import { Link } from "react-router-dom";

const AllTour = () => {
  const [toursData, setToursData] = useState([]);
  const [typeTour, setTypeTour] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/tours?type=${typeTour}`)
      .then((response) => response.json())
      .then((data) => setToursData(data));
  }, [typeTour]);
  console.log(toursData);
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
            <Tab
              onClick={() => setTypeTour("all")}
              className="focus:outline-none cursor-pointer text-neutral-700 font-semibold"
            >
              All
            </Tab>
            <Tab
              onClick={() => setTypeTour("BUDGET FRIENDLY")}
              className="focus:outline-none cursor-pointer text-neutral-700 font-semibold"
            >
              BUDGET FRIENDLY
            </Tab>
            <Tab
              onClick={() => setTypeTour("EXPANSIVE TOURS")}
              className="focus:outline-none cursor-pointer text-neutral-700 font-semibold"
            >
              EXPANSIVE TOURS
            </Tab>
            <Tab
              onClick={() => setTypeTour("RECOMMENDED")}
              className="focus:outline-none cursor-pointer text-neutral-700 font-semibold"
            >
              RECOMMENDED
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {toursData.map((tours) => (
                <AllTourCard tours={tours} key={tours._id}></AllTourCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {toursData.map((tours) => (
                <AllTourCard tours={tours} key={tours._id}></AllTourCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {toursData.map((tours) => (
                <AllTourCard tours={tours} key={tours._id}></AllTourCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-5 mt-16">
              {toursData.map((tours) => (
                <AllTourCard tours={tours} key={tours._id}></AllTourCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
      <section className="w-10/12 mx-auto pt-20">
        <p className="text-center text-xl font-thin leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae condimentum egestas, <br /> libero dolor
          auctor tellus, eu consectetur neque elit quis nunc. Cras elementum
          pretium.
        </p>
        <div className=" pt-10 w-52 mx-auto">
          <Link to='/tours'>
            <button className="uppercase btn w-full ">view all tours</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllTour;
