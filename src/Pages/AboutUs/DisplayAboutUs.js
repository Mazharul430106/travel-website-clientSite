import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DisplayAboutUs = ({ team }) => {

    const { deg, name, img, desc } = team;
    return (
        <div className='xl:flex lg:flex flex-none justify-between gap-5'>
            <div className=''>
                <img src={img} className='w-full xl:max-w-[1200px] rounded ' alt="" />
            </div>
            <div className=''>
                <div>
                    <h1 className='font-bold text-[24px] text-[#3282AD]'>{name}</h1>
                    <h1 className='font-semibold'>{deg}</h1>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default DisplayAboutUs;