import React from 'react';
import Navbar from './Navbar';
import FoodBanner from './FoodBanner';
import ExploreSection from './ExploreSection';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <hr />
            <FoodBanner></FoodBanner>
            <ExploreSection></ExploreSection>
        </div>
    );
};

export default Main;