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
        <div>



            {/* <div>
                <div>
                    <div >
                        <img src={footerLogo} className='w-[104px] h-[52px]' alt="" />
                        <p className='pb-[77px] pt-4'>Lorem Ipsum is simply dummy <br /> text of the printing and type <br /> setting industry.</p>
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
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">Events</Link>
                    <Link className="link link-hover">Blogs</Link>
                    <Link className="link link-hover">FAQ</Link>
                    <Link className="link link-hover">Join Us</Link>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <Link className="link link-hover">Project</Link>
                    <Link className="link link-hover">Lorem</Link>
                    <Link className="link link-hover">Service</Link>
                    <Link className="link link-hover">Our Story</Link>
                </div>
                <div>
                    <span className="footer-title">Contact Us</span>
                    <Link className="link link-hover">abc@gmail.com</Link>
                    <Link className="link link-hover">India</Link>
                </div>
            </div> */}

            



        </div>
    );
};

export default Footer;