import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import DisplayClients from './DisplayClients';
import './Clients.css'


const Clients = () => {

    const [clients, setClients] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allclients')
        .then(res=> res.json())
        .then(data=> setClients(data))
    },[])


    // constructor(props) {
    //     super(props)
    //    this.breakPoints = [
    //       { width: 1, itemsToShow: 1 },
    //       { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    //       { width: 850, itemsToShow: 3 },
    //       { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    //       { width: 1450, itemsToShow: 5 },
    //       { width: 1750, itemsToShow: 6 },
    //     ]
    //   }




    return (
        <section className='clients-section px-[70px]'>
            <div className='title pb-16'>
                <h1 className='text-[32px] text-center mx-auto lg:max-w-[400px] font-bold leading-[44px]'>What Our Clients Says About Us</h1>
            </div>


            <Carousel itemsToShow={3}>
                {
                    clients.map(singleClient => <DisplayClients key={singleClient._id} singleClient={singleClient}></DisplayClients>)
                }
            </Carousel>


        </section>
    );
};

export default Clients;