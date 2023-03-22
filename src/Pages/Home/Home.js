import React from 'react';
import Compass from '../../assets/Vector.png';
import heroImg from '../../assets/Layer 1 1.png';
import heroRactangle from '../../assets/heroBg.png'
import aroplane from '../../assets/arroplane-Vector.png';
import map from '../../assets/map.png';
import imageBg from '../../assets/bg.png';
import Ractangle9 from '../../assets/Rectangle 9.png';
import ractangle9 from '../../assets/rectangle-9.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiArrowUpDownFill } from 'react-icons/ri';
import './Home.css';
import Frame from '../../assets/Frame 11.png';
import AirIcon from '../../assets/airIcon.png';
import Packages from '../Packages/Packages';
import IslandInfo from '../IslansInfo/IslandInfo';
import WorldMap from '../../assets/world_map.png';
import Clients from '../Clients/Clients';

const Home = () => {
  return (
    <div className=''>
      {/* start hero section */}

      <section className='hero-section px-[70px] relative pt-[197px]' style={{
        background: `url(${heroRactangle})`,
        backgroundRepeat: 'no-repeat',
      }}>

        <div className='lg:flex items-center justify-between'>
          <div>
            <button className='flex items-center gap-12  cursor-pointer rounded-full bg-[#D2F4FF] w-[197px] h-16'>
              <span className='text-4xl ml-7'>visit</span>
              <span><img src={Compass} className='h-9 w-9' alt="" /></span>
            </button>
            <div className='w-full lg:max-w-[468px] max-w-full h-[243px] mt-12'>
              <h2 className='lg:text-[64px] text-[50px] leading-[140%] font-bold mt-[-20px]'>The Exotic <span className='text-[#3282AD]'>Lakshadweep</span> Islands</h2>
            </div>
          </div>

          <div className='relative max-w-[421px] h-full max-h-[425px]' >
            <img src={heroImg} className='w-full rounded-full' alt="" />
            <div className='absolute top-5 w-full  h-full z-[-10]'>
              <img src={imageBg} className='w-full' alt="" />
            </div>

            <div className=' absolute bottom-[-5px] left-[-45px] rounded w-full max-w-[150px] h-full max-h-[138px] bg-white shadow-xl'  >
              <img src={Ractangle9} alt="" />
              <div className='px-[9px]'>
                <h4 className='text-[14px]'>Explore Labuan Bajo</h4>
                <div className='flex items-cneter pb-1 gap-[6px]'>
                  <FaMapMarkerAlt className='text-[#42A7C3] w-[9px] h-[10px] top-1px relative top-[2px]'></FaMapMarkerAlt>
                  <span className='text-[10px]'>NTT, Indonesua</span>
                </div>
              </div>
            </div>

            <div className=' absolute lg:bottom-[110px] bottom-[90px] right-[-15px] rounded w-full max-w-[88px] h-full max-h-[82px] bg-white shadow-xl'  >
              <img src={ractangle9} alt="" />
              <div className='px-[9px]'>
                <h4 className='text-[8px]'>Le Pirate Hotel</h4>
                <div className='flex items-cneter pb-1 gap-[6px]'>
                  <FaMapMarkerAlt className='text-[#42A7C3] w-[7px] h-[8px] top-1px relative top-[2px]'></FaMapMarkerAlt>
                  <span className='text-[6px]'>Flores, Indonesia</span>
                </div>
              </div>
            </div>

            <div className='absolute lg:bottom-[200px] bottom-[190px] right-[-10px] lg:right-[-20px]'>
              <img src={Frame} className='w-11 h-11' alt="" />
            </div>

            <button className='flex items-center justify-center bg-white rounded-full absolute shadow-xl w-[168px] h-10 right-0 lg:bottom-[270px] bottom-[260px] gap-2'>
              <img src={aroplane} alt="" />
              <span className='text-[14px] font-normal'>Jakarta - Bali</span>
            </button>

          </div>

        </div>

        <div className='flex items-center lg:gap-[246px] gap-24  pt-16 pb-[136px]'>
          <button className='border border-[#3282AD] rounded px-8 py-4 text-[#3282AD] hover:bg-[#3282AD] hover:text-white'>Discover Now</button>
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
      {/* end hero section */}

      {/* start flying section */}
      <section className='flying-section px-[70px] py-10 bg-white shadow'>
        <h2 className='text-[20px] font-semibold'>Where are you flying? </h2>
        <form action="">
          <div className='lg:flex items-center gap-6'>
            <div className="form-control w-[340px]">
              <label className="label p-0">
                <span className="label-text text-[#112211] relative bg-white px-1 ml-2 top-[9px] z-10 " >From-To</span>
              </label>
              <div className='relative'>
                <input type="text" placeholder="Type here" className="input rounded input-bordered w-full focus:outline-none" />
                <RiArrowUpDownFill className='absolute top-[38%] cursor-pointer rotate-[90deg] right-3'></RiArrowUpDownFill>
              </div>
            </div>
            <div className="form-control lg:w-[140px] w-full">
              <label className="label p-0">
                <span className="label-text text-[#112211] relative bg-white px-1 ml-2 top-[9px] z-10">Trip</span>
              </label>
              <select className="select select-bordered w-full text-normal focus:outline-none">
                <option selected>Retrun</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="form-control w-[340px]">
              <label className="label p-0">
                <span className="label-text text-[#112211] relative bg-white px-1 ml-2 top-[9px] z-10">Depart- Return</span>
              </label>
              <input type="text" placeholder="Type here"
                className=" rounded input input-bordered w-full focus:outline-none" />
            </div>
            <div className="form-control w-[340px]">
              <label className="label p-0">
                <span className="label-text text-[#112211] relative bg-white px-1 ml-2 top-[9px] z-10">Passenger - Class</span>
              </label>
              <input type="text" placeholder="Type here"
                className=" rounded input input-bordered w-full focus:outline-none" />
            </div>
          </div>

          <div className='lg:flex items-center gap-2 lg:mt-12 mt-5 '>
            <input type="text" placeholder="+ Add Promo Code" className="input w-full h-12 relative rounded focus:outline-none input-bordered border-dashed" />
            <button type='submit' className='flex w-full lg:mt-0 mt-5 items-center justify-center rounded text-white gap-2 border lg:max-w-[144px] h-[48px] bg-[#3282AD]'>
              <img src={AirIcon} alt="" />
              <span className=''>Show Filghts</span>
            </button>
          </div>

        </form>
      </section>
      {/* end flying section */}


      <Packages></Packages>

      <IslandInfo></IslandInfo>


      {/* start frame section */}
      <section className='frame px-[70px] pb-[88px]'>

        <div className='relative'>
          <div className='lg:flex items-center w-full justify-between border  rounded px-8 bg-[#42A7C3] '>
            <div className='text-white'>
              <h2 className='w-full lg:max-w-[451px] font-bold text-[32px] pt-8 pb-8 leading-[50px] '>Let’s Ready to Explore The World With Us.</h2>
              <p className='font-normal w-full lg:max-w-[513px] leading-7 pb-[52px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. </p>
            </div>
            <div className='flex justify-center'>
              <button className='hover:text-[#3282AD] w-[183px] rounded bg-white h-[50px] font-semibold text-[20px] lg:mb-0 mb-10'>Contact Us</button>
            </div>
          </div>
          <img src={WorldMap} className='lg:w-[453px] absolute lg:right-[206px]  lg:top-9 top-[30%]' alt="" />
        </div>

      </section>
      {/* start frame section */}

      
      <Clients></Clients>





    </div>
  );
};

export default Home;