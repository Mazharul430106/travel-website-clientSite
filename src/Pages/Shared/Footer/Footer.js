import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/gol-logo-white.png';
import Facebook from '../../../assets/facebook.png';
import Linkedin from '../../../assets/linkedin.png';
import Twitter from '../../../assets/twitter.png';
import Instagram from '../../../assets/instagram.png';
import playStore from '../../../assets/playStore.png';
import CircleImg from '../../../assets/Circle.png';
import MobileImg from '../../../assets/frame.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='xl:mt-72 lg:mt-72 mt-32 relative'>

            <div className='border bg-[#41A5C1] xl:mt-[184px] lg:mt-[184px]  '>
                <footer className="footer p-10 px-[70px] xl:pt-48 lg:pt-60 pt-10 text-white">
                    <div>
                        <div >
                            <img src={footerLogo} className='w-[104px] h-[52px]' alt="" />
                            <p className='pb-[77px] pt-4 text-[18px] leading-8 '>Lorem Ipsum is simply dummy <br /> text of the printing and type <br /> setting industry.</p>
                        </div>

                        <div className='flex itmes-center pb-12 gap-4'>
                            <div className=' cursor-pointer flex items-center justify-center w-[42px] h-[42px] border bg-white rounded-[25px]'>
                                <img src={Facebook} alt="" />
                            </div>
                            <div className=' cursor-pointer flex items-center justify-center w-[42px] h-[42px] border bg-white rounded-[25px]'>
                                <img src={Twitter} alt="" />
                            </div>
                            <div className=' cursor-pointer flex items-center justify-center w-[42px] h-[42px] border bg-white rounded-[25px]'>
                                <img src={Linkedin} alt="" />
                            </div>
                            <div className=' cursor-pointer flex items-center justify-center w-[42px] h-[42px] border bg-white rounded-[25px]'>
                                <img src={Instagram} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='leading-8'>
                        <span className="footer-title text-[22px]">Company</span>
                        <Link className=" list-none link link-hover font-normal hover:left-[10px] w-full  text-[20px]">Events</Link>
                        <Link className=" list-none link link-hover font-normal hover:left-[10px] w-full  text-[20px]">Blogs</Link>
                        <Link className=" list-none link link-hover font-normal hover:left-[10px] w-full  text-[20px]">FAQ</Link>
                        <Link className=" list-none link link-hover font-normal hover:left-[10px] w-full  text-[20px]">Join US</Link>
                    </div>
                    <div className='leading-8'>
                        <span className="footer-title text-[22px]">About</span>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">Project</Link>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">Lorem</Link>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">Services</Link>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">Our Story</Link>
                    </div>
                    <div className='leading-8'>
                        <span className="footer-title text-[22px]">Contact Us</span>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">abc@gmail.com</Link>
                        <Link className=" hover:list-none link link-hover text-[20px] hover:left-[10px] w-full ">India</Link>
                    </div>
                </footer>

                <div className='mx-auto w-full lg:max-w-[1226px]'>
                    <hr className=''/>
                    <p className='text-center py-10 text-white'>Copyright © 2023 GoL Travels Private Limited. All Rights Reserved.</p>
                </div>

            </div>

            <div className='flex items-center justify-center'>
                <div className='absolute top-[-170px] xl:visible lg:visible invisible w-full xl:max-w-[1226px] lg:max-w-[1086px] py-9 px-16 lg:max-w-[1226px] rounded-lg bg-black text-white xl:flex lg:flex justify-between gap-40'>
                    <div className='pb-32 xl:pb-0 lg:pb-0'>
                        <h1 className='font-bold text-[42px]'>Download Our App</h1>
                        <p className='pt-7 pb-[70px]'>The best travel in the world</p>
                        <div className='flex items-center gap-4 border rounded p-4 bg-[#1A6892] xl:max-w-[213px] lg:max-w-[213px] w-full'>
                            <div>
                                <img src={playStore} alt="" />
                            </div>
                            <div>
                                <p className='text-[8px]'>GET IN ON</p>
                                <p className='text-sm'>Google Play</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='circle'></div>
                        <img src={MobileImg} className='absolute top-[-87px] w-[135px] h-[292px] left-[65px]' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;