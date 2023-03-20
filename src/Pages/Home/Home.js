import React from 'react';
import Compass from '../../assets/Vector.png';
import heroImg from '../../assets/Layer 1 1.png';
import heroRactangle from '../../assets/heroBg.png'

const Home = () => {
  return (
    <section className='hero-section px-[70px] relative' style={{
      background: `url(${heroRactangle})`
    }}>
      <div className='lg:flex items-center justify-between'>
        <div>
          <button className='flex items-center gap-12 mt-[133px] cursor-pointer rounded-full bg-[#D2F4FF] w-[197px] h-16'>
            <span className='text-4xl ml-7'>visit</span>
            <span><img src={Compass} className='h-9 w-9' alt="" /></span>
          </button>
          <div className='w-full lg:max-w-[468px] max-w-full h-[243px] mt-12'>
            <h2 className='lg:text-[64px] md:text-[50px] leading-[140%] font-bold mt-[-20px]'>The Exotic <span className='text-[#3282AD]'>Lakshadweep</span> Islands</h2>
          </div>
        </div>

        <div className='pt-[102px]'>
          <img src={heroImg} className='w-[421px] h-[425px] ' alt="" />
        </div>

      </div>
    </section>
  );
};

export default Home;