import React from "react";
import PopularPlace from "./HomePage/PopularPlace/PopularPlace";
import Discount from "./HomePage/Discount/Discount";
import AllTour from "./HomePage/AllTour/AllTour";
import UsefulInformation from "./HomePage/UsefulInformation/UsefulInformation";
import InterestingFacts from "./HomePage/InterestingFacts/InterestingFacts";
import WatchTour from "./HomePage/WatchTour/WatchTour";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <PopularPlace></PopularPlace>
        <Discount></Discount>
        <AllTour></AllTour>
      </div>
      <WatchTour></WatchTour>
      <div className="w-11/12 mx-auto">
        <UsefulInformation></UsefulInformation>
        <InterestingFacts></InterestingFacts>
      </div>
    </div>
  );
};

export default Home;
