import React from 'react';
import { BsSearch, BsFillTelephoneInboundFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { AiOutlineAlignLeft } from "react-icons/ai";

const TopNav = () => {
    return (
        <div>
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
        </div>
    );
};

export default TopNav;