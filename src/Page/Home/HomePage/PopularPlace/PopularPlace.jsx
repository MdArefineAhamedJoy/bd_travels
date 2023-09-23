import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsFillPersonFill } from "react-icons/bs";
import { SlReload } from "react-icons/sl";

import { Navigation, Autoplay } from "swiper/modules";

const PopularPlace = () => {
  const [places, setPlace] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularPlace")
      .then((response) => response.json())
      .then((data) => setPlace(data));
  }, []);
  return (
    <div className="mt-60 mb-32">
      <div className="text-center w-9/12 mx-auto pb-10">
        <h1 className="text-3xl font-semibold">Most Popular Tours</h1>
        <p className="py-5 leading-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae condimentum egestas, libero dolor auctor
          tellus, eu consectetur neque elit quis nunc. Cras elementum pretium.
        </p>
      </div>
      <section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {places.map(
            ({
              _id,
              package: packages,
              name,
              location,
              description,
              image,
            }) => (
              <SwiperSlide key={_id}>
                <div className="card w-full bg-base-100 shadow-md rounded-none my-10">
                  <figure>
                    {" "}
                    <img className="w-full h-60" src={image} alt="place" />
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
                        <BsFillPersonFill />{packages?.persons} Persons
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>
    </div>
  );
};

export default PopularPlace;
