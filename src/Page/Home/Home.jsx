import React from 'react';
import PopularPlace from './HomePage/PopularPlace/PopularPlace';
import Discount from './HomePage/Discount/Discount';
import AllTour from './HomePage/AllTour/AllTour';
import UsefulInformation from './HomePage/UsefulInformation/UsefulInformation';
import InterestingFacts from './HomePage/InterestingFacts/InterestingFacts';



const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <PopularPlace></PopularPlace>
           <Discount></Discount>
           <AllTour></AllTour>
           <UsefulInformation></UsefulInformation>
           <InterestingFacts></InterestingFacts>
        </div>
    );
};

export default Home;