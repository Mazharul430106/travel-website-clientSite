import React, { useEffect, useState, } from 'react';
import Slider from 'react-slick';
import DisplayPackages from './DisplayPackages';
import './Packages.css';

const Packages = () => {
    const [allPackages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='package-section'>
            <div className='title pt-[88px] text-center'>
                <h2 className='text-2xl font-bold pb-4 text-[##3A3A3A]'>Best Packages For You</h2>
                <p className='pb-16 text-[#5A5A5A]'>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>
            </div>

            <div className='lg:grid lg:grid-cols-5 mb:grid-cols-3 grid-cols-2 pb-[88px]'>
                <div className='border w-full flex justify-center items-center text-[#3282AD] cursor-pointer hover:bg-[#3282AD] hover:text-white font-bold h-[78px] mb-2'>Maldives</div>
                <div className='border w-full flex justify-center items-center text-[#3282AD] cursor-pointer hover:bg-[#3282AD] hover:text-white font-bold lg:border-l-0 h-[78px] mb-2 '>Samudram</div>
                <div className='border w-full flex justify-center items-center text-[#3282AD] cursor-pointer hover:bg-[#3282AD] hover:text-white font-bold lg:border-l-0 h-[78px] mb-2 '>Cordelia</div>
                <div className='border w-full flex justify-center items-center text-[#3282AD] cursor-pointer hover:bg-[#3282AD] hover:text-white font-bold lg:border-l-0 h-[78px] mb-2 '>Agatti</div>
                <div className='border w-full flex justify-center items-center text-[#3282AD] cursor-pointer hover:bg-[#3282AD] hover:text-white font-bold lg:border-l-0 h-[78px] mb-2 '>More</div>
            </div>

            <div>
                <Slider {...settings} className=''>
                    {
                        allPackages.map(signlePackage => <DisplayPackages key={signlePackage._id} signlePackage={signlePackage}></DisplayPackages>)
                    }
                </Slider>
                <div className='text-center mt-28 mb-[88px]'>
                    <button className='border border-[#3282AD] rounded w-[172px] h-[54px] text-[#3282AD] hover:bg-[#3282AD] hover:text-white font-normal'>Discover More</button>
                </div>
            </div>


        </section>
    );
};

export default Packages;