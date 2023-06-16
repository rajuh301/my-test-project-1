import React from 'react';
import bg from '../../public/bg.png'
import ride from '../../public/ride.png'
import { FaArrowRight } from 'react-icons/fa';
import './CustomFont.css';
const ExploreSection = () => {
    return (
        <div className='md:flex my-text'>

            <div className='md:w-1/2 md:mt-24'>
                <p className='flex text-3xl font-semibold md:mx-20 mx-auto md:text-left text-center text-green-700 w-72'>Explore Your favourite city's food.</p>

                <p className='flex md:mx-20 md:text-left text-center mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, quae in, ducimus itaque illum, velit voluptate ipsum sequi excepturi nobis quo placeat dolore magni. Possimus labore ad quo iusto qui?</p>

                <button className='flex bg-green-700 p-2 mx-auto text-white font-semibold items-center gap-2 mt-2 md:mx-20 rounded-full px-5'>Expolore <span><FaArrowRight></FaArrowRight></span></button>
            </div>

            <div className='static'>
                <img className='absolute' src={bg} alt="" />
                <img className='mt-20 absolute w-96 md:hover:translate-x-72 duration-1000' src={ride} alt="" />
            </div>




        </div>
    );
};

export default ExploreSection;