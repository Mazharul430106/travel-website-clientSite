import React from 'react';
import Compass from '../../assets/Vector.png';
import heroImg from '../../assets/Layer 1 1.png';
import heroRactangle from '../../assets/heroBg.png'
import aroplane from '../../assets/arroplane-Vector.png';
import map from '../../assets/map.png';
import imageBg from '../../assets/bg.png';
import Ractangle9 from '../../assets/Rectangle 9.png';
import './Home.css';

const Home = () => {
  return (
    <section className='hero-section px-[70px] relative pt-[197px]' style={{
      background: `url(${heroRactangle})`,
      backgroundRepeat: 'no-repeat',
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

        <div className='relative max-w-[421px] h-full max-h-[425px]' >
          <img src={heroImg} className='w-full rounded-full' alt="" />
          <div className='absolute top-5 w-full  h-full z-[-10]'>
            <img src={imageBg} className='w-full' alt="" />
          </div>

          <div className=' border w-full max-w-[150px] h-full max-h-[138px] bg-white shadow-xl'  >
            <img src={Ractangle9} alt="" />
            <div className='px-[9px]'>
              <h4 className='text-[14px]'>Explore Labuan Bajo</h4>
              <div className='flex items-cneter pb-1'>
                <span></span>
                <span className='text-[10px]'>NTT, Indonesua</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className='flex items-center gap-[246px] pt-16 pb-[136px]'>
        <button className='border border-[#3282AD] rounded px-8 py-4  text-[#3282AD]'>Discover Now</button>
        <span><img className='rotate-[-45deg] text-[#42A7C3]' src={aroplane} alt="" /></span>
      </div>


      <div className='' style={{
        background: `url(${map})`,
        width: '780px',
        height: '874px',
        position: 'absolute',
        top: '20px',
        right: '0px',

      }}>

      </div>


    </section>
  );
};

export default Home;