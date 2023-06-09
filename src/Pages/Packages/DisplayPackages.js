import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import StarIcon from '../../assets/Star.png';


const DisplayPackages = ({ signlePackage }) => {
    // console.log(signlePackage)
    const { img, place_title, price, ratting, desc } = signlePackage;

    return (
        <div className="card card-compact w-full rounded shadow-lg bg-base-100 ">
            <div className='relative'>
                <figure><img src={img} className='lg:h-[350px] w-full rounded-t' alt="Shoes" /></figure>
                <span className='absolute top-4 right-4 bg-white font-bold text-sm px-3 py-1 rounded-full text-[#3282AD]'>${price}</span>
            </div>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <h2 className="card-title">{place_title}</h2>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={StarIcon} alt="" />
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