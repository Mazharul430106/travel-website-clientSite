import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/gol-logo 1@2x.png';
import './Navbar.css';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='text-[16px]'><Link className='lg:bg-inherit'>Find Reservations</Link></li>
        <li className='text-[16px]' tabIndex={0}>
            <Link className="justify-between lg:bg-inherit">
                Packages
                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </Link>
            <ul className="p-2">
                <li className='text-[16px]'><Link>Submenu 1</Link></li>
                <li className='text-[16px]'><Link>Submenu 2</Link></li>
            </ul>
        </li>
        <li className='text-[16px]' tabIndex={0}>
            <Link className="justify-between lg:bg-inherit">
                About Lakshadweep
                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </Link>
            <ul className="p-2">
                <li className='text-[16px]'><Link>Submenu 1</Link></li>
                <li className='text-[16px]'><Link>Submenu 2</Link></li>
            </ul>
        </li>
        <li className='text-[16px]'><Link className='lg:bg-inherit' to='/aboutUs'>About Us</Link></li>
        <li className='text-[16px]'><Link className='lg:bg-inherit'>Gol</Link></li>
        <li className='text-[16px]'><Link className='lg:bg-inherit'>Support</Link></li>
        <li className='lg:ml-28 ml-0 text-[16px]'><Link className='lg:bg-inherit text-[#3282AD]' to='/login'>Login</Link></li>
        <li className='text-[16px]'><Link className='signUpLast  px-0 lg:w-[123px] lg:h-[54px] lg:bg-[#056499] lg:text-white lg:flex lg:justify-center pl-4 lg:pl-0' to='/signup'>Sign Up</Link></li>

    </React.Fragment>

    return (

        <div className="navbar lg:px-[70px] absolute z-10 w-full max-w-[1366px] pt-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case">
                    <img className='w-[99.35px] h-[56px]' src={Logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center ml-auto hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {menuItems}
                </ul>
            </div>
        </div>

    );
};

export default Navbar;