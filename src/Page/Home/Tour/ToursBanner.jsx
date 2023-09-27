import React from "react";
import { BsSearch, BsFillTelephoneInboundFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineAlignLeft } from "react-icons/ai";

const ToursBanner = () => {
  const location = useLocation();
  const toursPage = location?.pathname === "/tours";
  const navItem = (
    <>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Home</Link>
      </li>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Page</Link>
      </li>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Blogs</Link>
      </li>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Destination</Link>
      </li>
      <li>
        <Link to="/tours" className="mx-3  text-neutral-700 uppercase">
          Tours{" "}
        </Link>
      </li>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Elements</Link>
      </li>
      <li>
        <Link className="mx-3  text-neutral-700 uppercase">Shops</Link>
      </li>
      <li>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary  rounded-full">
            0
          </span>
          <button className="btn   btn-circle ">
            <HiOutlineShoppingCart className="mx-3 w-full h-full  text-neutral-700 uppercase"></HiOutlineShoppingCart>
          </button>
        </div>
      </li>
      <li className="ms-3">
        <label htmlFor="my-drawer" className="   text-[#ef2853]  uppercase">
          <AiOutlineAlignLeft></AiOutlineAlignLeft>
        </label>
      </li>
    </>
  );
  return (
    <div >
      <section className={` bg_tours flex items-start`}>
        <div
          className={`navbar  px-7 py-3  `}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52"
              >
                {navItem}
              </ul>
            </div>
            <a className=" normal-case text-xl font-bold ">BD Traveler</a>
          </div>
          <div className="navbar-end  hidden lg:flex items-center ">
            <ul className=" flex  font-semibold items-center ">{navItem}</ul>
          </div>
        </div>
      </section>

      <div className="drawer drawer-end z-30">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToursBanner;
