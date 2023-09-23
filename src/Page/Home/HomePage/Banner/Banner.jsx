import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { BsCalendar3 } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiButterflyKnife } from "react-icons/gi";

const Banner = () => {
  const [bannerSlide, setBannerSlide] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((response) => response.json())
      .then((result) => setBannerSlide(result));
  }, []);
  return (
    <div className="h-screen relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper "
      >
        {bannerSlide.map((banner) => (
          <SwiperSlide key={banner?._id}>
            <img className="w-full h-screen" src={banner?.image} alt="" />
            <div className="absolute  z-10 top-[50%] left-[40%] text-4xl">
              <h1>{banner?.title}</h1>
              <p>{banner?.subTitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* set extra section location and search date   */}

      <section className="w-11/12 flex left-[5%] p-5  md:absolute bottom-[7%] z-10 bg-base-100">
        <div className="me-5">
          <p className="">Find Your </p>
          <p className="text-2xl">Destination</p>
        </div>
        <div>
          <div className="flex justify-around">
            <div>
              <div className="form-control ">
                <div className=" flex items-center">
                  <span className="label-text text-xl ">When</span>
                  <label className="input-group ">
                    <input
                      type="text"
                      placeholder="Month"
                      className="input input-bordered focus:outline-none"
                    />
                    <span>
                      <BsCalendar3></BsCalendar3>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="form-control">
                <div className=" flex items-center">
                  <span className="label-text text-xl px-2">Where</span>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Destination "
                      className="input input-bordered focus:outline-none"
                    />
                    <span><BiWorld></BiWorld></span>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="form-control">
                <div className=" flex items-center ">
                  <span className="label-text text-xl px-2">What</span>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Type"
                      className="input input-bordered focus:outline-none"
                    />
                    <span><GiButterflyKnife></GiButterflyKnife></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button className="btn ">Search</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
