import React from 'react';
import '../CSS/main.css';
import { useRef } from 'react';
// npm i react-icons
import {FaBars , FaTimes} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';




export default function Navbar(){
    const navRef = useRef();
    const showNavBar = ()=>{
        navRef.current.classList.toggle('responsive_nav')
    }
    return(
        <header>
            <a href="/" className='part1'>
                <img src='/images/navLogo3.jpg' alt="Logo" className='logo'/>
            </a>
            <nav ref={navRef} className='part2'>
                <div className='part2a'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/courses">Courses</a>
                    <a href="/webinar">Webinar</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className='part2b'>
                    <a href="/login">Login</a>
                    <button className='all-btns'>
                        FREE Consultation
                        <FiArrowUpRight style={{ marginLeft: '8px' }} />
                    </button>
                </div>
                
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'>
                <FaBars />
            </button>
        </header>
    )
}