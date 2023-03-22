import React, { useEffect, useState } from 'react';
import DisplayIslands from './DisplayIslands';

const IslandInfo = () => {

    const [allIslands, setAllIslands] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allIslands')
        .then(res=> res.json())
        .then(data=> setAllIslands(data))
    },[])




    return (
        <section className='px-[70px]'>
            <div className='title text-center'>
                <h1 className='font-bold text-[32px]'>Island Stays</h1>
                <p className='font-normal w-full leading-[22px] pb-16 mx-auto'>One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious <br />
                    modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
            </div>

            <div className='grid lg:grid-cols-3 mb:grid-cols-2 grid-cols-1 gap-6 pb-[88px]'>
                {
                    allIslands.map(singleIsland => <DisplayIslands key={singleIsland._id} singleIsland={singleIsland}></DisplayIslands>)
                }
            </div>

        </section>
    );
};

export default IslandInfo;