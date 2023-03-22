import React from 'react';
import StarIcon from '../../assets/Star.png';

const DisplayIslands = ({ singleIsland }) => {
    // console.log(singleIsland)
    const { img, ratting, place_title, desc } = singleIsland;
    return (
        <div className="card card-compact w-full rounded bg-base-100 shadow-xl">
            <figure><img src={img} className='rounded-none' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{place_title}</h2>
                <p>{desc}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <img src={StarIcon} alt="" />
                        <div>
                            <span className='font-bold'>{ratting} </span>
                            <span>(1.5k Reviews)</span>
                        </div>
                    </div>
                    <button className="w-[163px] h-9 border rounded bg-[#3282AD] text-white hover:bg-white  hover: border-[#3282AD] hover:text-[#3282AD] ">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayIslands;