import React, { useEffect, useState, } from 'react';
import DisplayPackages from './DisplayPackages';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Packages.css';


const Packages = () => {
    const [allPackages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='package-section px-[70px]'>
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

            <div className=' w-full'>

                <Carousel responsive={responsive}
                    infinite={true}
                    showDots={true}
                    swipeable={false}
                    ssr={true}
                    autoPlaySpeed={2000}
                    autoPlay={false}
                    transitionDuration={1000}
                    itemClass="carousel-item-padding-40-px">
                        {
                            allPackages.map(signlePackage => <DisplayPackages key={signlePackage._id} signlePackage={signlePackage}></DisplayPackages>)
                        }
                </Carousel>

            </div>

        </section>
    );
};

export default Packages;