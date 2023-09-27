import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

const Discount = () => {
  const [toursData, setToursData] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((response) => response.json())
      .then((data) => setToursData(data));
  }, []);
  return (
    <div className="md:flex  mx-auto">
      <section className="w-9/12 bg-gray-100">
        <h1 className="text-4xl">Deals & Discounts</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          sollicitudin, tellus vitae <br /> condimentum elit egestas, libero
          dolor auctor tellus, eu consectetur neque elit quis.
        </p>
      </section>
      <section className="w-3/12 h-96 border-2 border-yellow-500">
        <h1 className="text-center text-2xl font-semibold border-b-2">
          Top Reviews
        </h1>
        <section className="w-full h-full "></section>
      </section>
    </div>
  );
};

export default Discount;
