import React, { useEffect, useState } from 'react';
import AboutBg from '../../assets/heroBg.png';
import aboutMap from '../../assets/aboutMapHero.png';
import './AboutUs.css';
import CircleImg from '../../assets/Circle big.png';
import { useLoaderData } from 'react-router-dom';
import DisplayAboutUs from './DisplayAboutUs';
import NastedNavItem from '../NastedNavItem/NastedNavItem';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';



const AboutUs = () => {

    const ourTeams = useLoaderData();

    const [teams, setTeams] = useState([ourTeams[4]]);
    // console.log(teams)

    const handleTeam = (singleTeam) => {
        const newTeams = [teams, singleTeam];
        setTeams(newTeams);
    }

    return (
        <div className='px-[70px] xl:w-full px-0 pt-40' style={{
            background: `url(${AboutBg})`,
            backgroundRepeat: 'no-repeat'
        }}>

            <div className='h-[500px]'>
                <div className='h-full xl:max-h-[445px] lg:max-h-[445px] xl:max-w-[896px] lg:max-w-[896px] w-full mx-auto' style={{
                    background: `url(${aboutMap})`,
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className='flex justify-center relative'>
                        <img src={CircleImg} alt="" />
                        <h1 className='absolute top-[40%] text-5xl font-bold'>About Us</h1>
                    </div>
                </div>
            </div>

            <div className=' w-full mx-auto xl:max-w-[1226px] lg:max-w-[1226px] py-12 bg-[#F6FDFF] mb-[64px]'>
                <div className='w-full xl:max-w-[377px] mx-auto text-center'>
                    <h2 className='font-bold text-[32px]'>Our Team</h2>
                    <p className='font-normal text-base'>Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi ei, at nihil tantas platonem eos. </p>
                </div>
            </div>

            <div className='xl:flex lg:flex gap-20'>
                <div className='nestedDiv xl:flex-none lg:flex-none mt-[15px]'>

                    {
                        ourTeams.map(singleTeam => <NastedNavItem key={singleTeam._id} singleTeam={singleTeam} handleTeam={handleTeam} ></NastedNavItem>)
                    }

                </div>
                <div className=''>
                    {
                        teams.map(team => <DisplayAboutUs key={team._id} team={team}></DisplayAboutUs>)
                    }
                </div>
            </div>


            <div className='mt-[88px] py-[64px] bg-[#F6FDFF]'>
                
                <div className='xl:w-[578px] xl:ml-[115px] lg:ml-[115px]'>
                    <h2 className='text-[32px] font-bold'>What customer’s are saying?</h2>
                    <p className=''>Take a look at what our customer’s are saying. At Nature we not only provide you with services but also we provide you with valuable experiences for your valuable time.</p>
                </div>


                <ImageGallery></ImageGallery>
            </div>


            <div>
                
            </div>





        </div>

    );
};

export default AboutUs;