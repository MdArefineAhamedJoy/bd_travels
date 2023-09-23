import React from "react";
import { BsSearch, BsFillTelephoneInboundFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineAlignLeft } from "react-icons/ai";
import Banner from "../../Home/HomePage/Banner/Banner";

const NavBar = () => {
  const location = useLocation()
  const bannerSection = location?.pathname ; 
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
        <Link className="mx-3  text-neutral-700 uppercase">Tours </Link>
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
    <div className="h-screen ">
      <section className="  px-7 bg-neutral-700 py-3 text-white md:block hidden">
        <div className="md:flex justify-between">
          <div className="flex">
            <div className="flex items-center">
              <span className="me-2">
                <BsFillTelephoneInboundFill></BsFillTelephoneInboundFill>
              </span>{" "}
              <small>1-677-124-44227</small>
            </div>
            <div className="flex items-center ms-5">
              <span className="me-2">
                <BiTime></BiTime>
              </span>
              <small>Mon - Sat 8.00 - 18.00 Sunday CLOSED</small>
            </div>
          </div>
          <div className="flex items-center">
            <div className="">
              <p>English</p>
            </div>
            <p className="mx-8">SingIn</p>
            <BsSearch></BsSearch>
          </div>
        </div>
      </section>
      <section className="navbar bg-base-100 px-7 py-3 ">
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
          <a className=" normal-case text-xl font-bold">BD Traveler</a>
        </div>
        <div className="navbar-end hidden lg:flex items-center">
          <ul className=" flex items-center font-semibold ">{navItem}</ul>
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
      {
         bannerSection && <Banner></Banner>
      }
      
    </div>
  );
};

export default NavBar;
