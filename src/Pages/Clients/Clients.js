import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import DisplayClients from './DisplayClients';
import './Clients.css'


const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allclients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
        <section className='clients-section  '>
            <div className='title pb-16'>
                <h1 className='text-[32px] text-center mx-auto lg:max-w-[400px] font-bold leading-[44px]'>What Our Clients Says About Us</h1>
            </div>

            <Slider {...settings}>
                {
                    clients.map(singleClient => <DisplayClients key={singleClient._id} singleClient={singleClient}></DisplayClients>)
                }
            </Slider>

        </section>
    );
};

export default Clients;