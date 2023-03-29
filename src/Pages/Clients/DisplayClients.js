import React from 'react';
import StarIcon from '../../assets/Star.png';

const DisplayClients = ({ singleClient }) => {
    console.log(singleClient)
    const { img, name, country, desc } = singleClient;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-lg rounded py-[22px]">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="text-[22px] font-semibold">{name}</h2>
                    <h3 className='text-[18px] pt-2 pb-[60px]'>{country}</h3>
                </div>

                <p className='text-center font-normal pb-5'>{desc}</p>
                <div className='flex items-center justify-center'>
                    <img src={StarIcon} className='' alt="" />
                    <img src={StarIcon} className='' alt="" />
                    <img src={StarIcon} className='' alt="" />
                    <img src={StarIcon} className='' alt="" />
                    <img src={StarIcon} className='' alt="" />
                </div>
            </div>
        </div>
    );
};

export default DisplayClients;