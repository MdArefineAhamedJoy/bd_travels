import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
const items = [
  {
    id: 1,
    type: "Adventure ",
  },
  {
    id: 2,
    type: "Business Travel",
  },
  {
    id: 3,
    type: " Cruises",
  },
  {
    id:4,
    type: "Exotic Vacations",
  },
  {
    id: 5,
    type: "Golf & Spa",
  },
  {
    id:6,
    type: "Holidays ",
  },
  {
    id: 7,
    type: "Honeymoon",
  },
  {
    id:8,
    type: " Last Minute ",
  },
  {
    id: 9,
    type: "Travel",
  },
];
const BlogSideBar = () => {
  return (
    <div className="px-5 ">
      <div className="relative w-full">
        <input
          className="border-2 font-bold focus:outline-none p-1 px-2 pe-9 my-2 w-full bg-transparent rounded"
          type="text"
          placeholder="Search..."
        />
        <button
          className="absolute right-[0px] top-0 bottom-0 h-full  px-2 pe-3 text-gray-600 "
          type="button"
        >
          <div>
            <BsSearch />
          </div>
        </button>
      </div>
      <h3 className="mb-5 mt-7 text-xl font-bold">About Author</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
        tellus, eu consectetur neque elit quis nunc. Cras elementum pretium
      </p>

      <div className="mt-10">
        <h2 className="mb-5 text-xl font-bold">Categories</h2>
        <ul>
          {items.map(({id , type}) => (
            <li key={type}  className="shadow-sm font-medium my-1 p-2 hover:text-red-500 flex items-center justify-between bg-base-100 hover:bg-gray-300 w-full rounded-none  duration-300 cursor-pointer ">
              <Link >{type} </Link> <FaAngleRight></FaAngleRight>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;
