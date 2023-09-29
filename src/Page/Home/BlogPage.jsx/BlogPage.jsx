import React from "react";
import { BsSearch } from "react-icons/bs";

const items = ["Adventure ",
    "Business Travel" ,
   " Cruises" ,
    "Exotic Vacations" ,
    "Golf & Spa" ,
    "Holidays ",
    "Honeymoon" ,
   " Last Minute ",
    "Travel" ]

const BlogPage = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center w-9/12 mx-auto mt-20">
        <h1 className=" text-4xl pb-6">Latest News</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin ">
          Lorem ipsum dolor sit amet mattis. Proin gravida nibh vel velit auctor
          aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
          consequat ipsum, nec sagittis sem nibh id elit.
        </p>
      </div>
      <main className="flex my-20">
        <section className="w-9/12"></section>
        <section className="w-3/12">
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
          <h3>About Author</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
            tellus, eu consectetur neque elit quis nunc. Cras elementum pretium
          </p>
          <h2>Categories</h2>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
