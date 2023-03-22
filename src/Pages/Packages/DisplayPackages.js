import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';


const DisplayPackages = ({ signlePackage }) => {
    // console.log(signlePackage)
    const { img, place_title, price, ratting, desc } = signlePackage;


    return (
        <div className="card card-compact w-full rounded bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <h2 className="card-title">{place_title}</h2>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-[#3282AD]'></FaStar>
                        <span className='font-bold'>{ratting}</span>
                    </div>
                </div>
                <p className='pb-[30px]'>{desc}</p>
                <div className="card-actions justify-center cursor-pointer">
                    <button className="w-[163px] h-9 border rounded bg-[#3282AD] text-white hover:bg-white  hover: border-[#3282AD] hover:text-[#3282AD] ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayPackages;