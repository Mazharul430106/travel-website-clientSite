import React, { useEffect, useState } from 'react';
import AboutBg from '../../assets/heroBg.png';
import aboutMap from '../../assets/aboutMapHero.png';
import './AboutUs.css';
import CircleImg from '../../assets/Circle big.png';
import { useLoaderData } from 'react-router-dom';
import DisplayAboutUs from './DisplayAboutUs';
import NastedNavItem from '../NastedNavItem/NastedNavItem';



const AboutUs = () => {

    const ourTeams = useLoaderData();

    const [teams, setTeams] = useState([ourTeams[4]]);
    console.log(teams)

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

            <div className=' w-full mx-auto xl:max-w-[1226px] lg:max-w-[1226px] py-12 bg-[#F6FDFF] '>
                <div className='w-full xl:max-w-[377px] mx-auto text-center'>
                    <h2 className='font-bold text-[32px]'>Our Team</h2>
                    <p className='font-normal text-base'>Quidam officiis similique sea ei, vel tollit indoctum
                        efficiendi ei, at nihil tantas platonem eos. </p>
                </div>
            </div>

            <div className='xl:flex lg:flex gap-20 mt-5'>
                <div className='nestedDiv xl:flex-none lg:flex-none'>

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


            <div>
                hello gallery
            </div>




        </div>

    );
};

export default AboutUs;