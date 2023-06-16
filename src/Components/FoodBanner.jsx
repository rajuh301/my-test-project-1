import React from 'react';
import { FaBeer, FaCaretRight, FaRobot, FaSearch } from 'react-icons/fa';
import leaf from '../../public/01.png'
import food from '../../public/02.png'



const FoodBanner = () => {


    return (
        <div className='md:flex bg-sky-50 h-auto md:mb-10 my-text'>
            <div >
                <img className='w-28 md:absolute md:top-20 left-20 ' src={leaf} alt="" />
            </div>

            <div>
                <h2 className='text-green-700 font-semibold md:text-6xl text-3xl md:text-left text-center md:mt-20 md:w-2/3 w-3/3 md:px-20'>Order food online from your favourite local restaurants <span className='text-orange-500'>.</span></h2>

                <p className='flex font-semibold md:px-20 mx-auto px-2 py-5'>Freshly made food delivred to your door.</p>

                <div>



                    <div className="flex mx-auto md:w-96 md:mx-20 md:static mb-32">

                        <div className=" w-8 h-8 py-2 rounded-full md:absolute md:left-[120px] md:flex hidden bg-orange-500 mt-1"></div>


                        <input type="text" className="px-10 py-2 border border-green-700 rounded-full md:w-full" placeholder="Enter your Location" />

                        <button type="submit" className="px-4 md:py-[10px] py-2 flex  justify-center rounded-full md:absolute md:left-[420px] md:w-[120px] text-center  bg-green-700 text-white font-semibold md:flex gap-2"><span className='mt-1'><FaSearch></FaSearch></span>Search</button>

                    </div>





                </div>

            </div>

            <div className='mr-20'>
                <img className='md:absolute w-28 top-20 right-44' src={leaf} alt="" />
                <img className='md:absolute right-32 top-28 w-96 hover:animate-spin' src={food} alt="" />

                <div className='bg-white rounded px-2 text-center mt-5 md:absolute md:right-60 opacity-80'>
                    <p className='text-3xl font-bold text-orange-500 flex items-center justify-center'><span><FaCaretRight></FaCaretRight></span> 200K+</p>
                    <p className='font-semibold'>People Delivered</p>
                </div>

            </div>



        </div>
    );
};

export default FoodBanner;