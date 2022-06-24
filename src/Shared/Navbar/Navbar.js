import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LoginIcon from '@mui/icons-material/Login';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import logo from '../../Utility/Logo/logo.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='fixed'>
            <div className={`${!open ? 'bg-slate-300 w-10 h-screen p-2' : 'bg-slate-300 w-fit h-screen '}`}>
                <div className='relative'>
                    <Link to='/' className='no-underline flex justify-center items-center'>
                        <img src={logo} className='w-8' alt="" />
                        <span className={`${open ? 'px-2 font-bold md:text-2xl' : 'hidden'}`}>Travelers hut</span>
                    </Link>
                    <div className={`absolute ${open ? 'top-0 left-32 ml-3 md:left-40 md:ml-7' : 'top-0 left-6'}`}>
                        <button onClick={() => setOpen(!open)} className='text-slate-300'>
                            {open ? <ArrowCircleLeftIcon></ArrowCircleLeftIcon> : <ArrowCircleRightIcon></ArrowCircleRightIcon>}
                        </button>
                    </div>
                </div>
                <div>
                    <div className='pt-5'>
                        <Link to='/' className='no-underline flex items-center'>
                            <HomeIcon className='text-slate-700'></HomeIcon>
                            <span className={`${open ? 'px-2 font-bold' : 'hidden'}`}>Home</span>
                        </Link>
                    </div>
                    <div className='pt-5'>
                        <Link to='/service' className='no-underline flex items-center'>
                            <MiscellaneousServicesIcon className='text-slate-700'></ MiscellaneousServicesIcon >
                            <span className={`${open ? 'px-2 font-bold' : 'hidden'}`}>Service</span>
                        </Link>
                    </div>
                    <div className='pt-5'>
                        <Link to='/plan' className='no-underline flex items-center'>
                            <TravelExploreIcon className='text-slate-700'></TravelExploreIcon>
                            <span className={`${open ? 'px-2 font-bold' : 'hidden'}`}>Plan</span>
                        </Link>
                    </div>
                    <div className='pt-5'>
                        <Link to='/login' className='no-underline flex items-center'>
                            <LoginIcon className='text-slate-700'></LoginIcon>
                            <span className={`${open ? 'px-2 font-bold' : 'hidden'}`}>Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;