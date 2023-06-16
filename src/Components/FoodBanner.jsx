import React from 'react';
import { FaBeer, FaCaretRight, FaRobot, FaSearch } from 'react-icons/fa';
import leaf from '../../public/01.png'
import food from '../../public/02.png'



const FoodBanner = () => {


    return (
        <div className='md:flex bg-sky-50 h-auto md:mb-10 my-text relative'>
            <div >
                <img className='md:w-28 w-20 md:absolute md:top-1 left-10 ' src={leaf} alt="" />
            </div>

            <div>
                <h2 className='text-green-700 font-semibold md:text-6xl text-3xl md:text-left text-center md:mt-20 md:w-2/3 w-3/3 md:px-20'>Order food online from your favourite local restaurants <span className='text-orange-500'>.</span></h2>

                <p className='flex font-semibold md:px-20 mx-auto px-2 py-5'>Freshly made food delivred to your door.</p>

                <div>



                    <div className="md:flex block md:w-96 md:mx-20 md:relative md:mb-32 mb-5">

                        <div className=" w-8 h-8 py-2 rounded-full md:absolute md:left-1 md:flex hidden bg-orange-500 mt-1"></div>


                        <input type="text" className="px-10 py-2 border border-green-700 rounded-full w-full" placeholder="Enter your Location" />

                        <button type="submit" className="px-4 md:py-[10px] py-2 flex justify-center mx-auto md:mt-0 mt-2 rounded-full md:absolute md:left-72 md:w-[120px] text-center  bg-green-700 text-white font-semibold md:flex gap-2"><span className='mt-1'><FaSearch></FaSearch></span>Search</button>

                    </div>



                </div>

            </div>

            <div className='mr-20 '>
                <img className='md:absolute w-28 top-5 right-44 md:block hidden' src={leaf} alt="" />


                <div className='bg-white rounded px-2 text-center md:mt-5 md:hidden block w-1/3 mx-36 opacity-80'>
                    <p className='text-3xl font-bold text-orange-500 flex items-center justify-center'><span><FaCaretRight></FaCaretRight></span> 200K+</p>
                    <p className='font-semibold'>People Delivered</p>

                </div>




                <img className='md:absolute md:right-32 top-10 md:w-96 md:mx-0 mx-10 hover:animate-spin' src={food} alt="" />

                <div className='bg-white rounded px-2 text-center mt-5 md:absolute md:block hidden right-60 opacity-80'>
                    <p className='text-3xl font-bold text-orange-500 flex items-center justify-center'><span><FaCaretRight></FaCaretRight></span> 200K+</p>
                    <p className='font-semibold'>People Delivered</p>
                </div>

            </div>



        </div>
    );
};

export default FoodBanner;