import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const InterestingFacts = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("interesting.json")
      .then((response) => response.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <main className="my-32">
      <div className="w-9/12 mx-auto text-center">
        <h1 className=" text-4xl pb-6">Interesting Facts</h1>
        <p className="text-lg leading-8 backdrop-blur-xl font-thin">
          Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum.
          Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. In
          sed viverra dui. Suspendisse laoreet velit at eros eleifend.
        </p>
      </div>
      <section className="mx-auto py-24">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={5}
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
        >
          {allData.map((data) => (
            <SwiperSlide key={data?.id}>
              <img className="mx-auto" src={data?.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default InterestingFacts;
