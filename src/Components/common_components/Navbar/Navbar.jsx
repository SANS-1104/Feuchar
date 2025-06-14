import React, { useRef, useEffect, useState } from 'react';
import './navbar.css';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { useCart } from "../../../../src/context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navRef = useRef();
    const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const openCalendly = () => {
        window.open('https://calendly.com/feuchar-team/call-with-feuchar', '_blank');
    };


    useEffect(() => {
        const checkCalendlyInterval = setInterval(() => {
            if (window.Calendly) {
                setIsCalendlyLoaded(true);
                clearInterval(checkCalendlyInterval);
            }
        }, 100);

        return () => clearInterval(checkCalendlyInterval);
    }, []);

    return (
        <header>
            <a href="/" className='part1'>
                <img src='/images/navLogo3.jpg' alt="Logo" className='logo' />
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
                    <div className='cart-icon-container'>
                        <a href='/cart' className='cartIcon'>
                            <FaShoppingCart style={{ width: "25px", height: "25px" }} />
                            {cartItemCount > 0 && <span className='cart-badge'>{cartItemCount}</span>}
                        </a>
                    </div>

                    <a href="/login">Login</a>
                    <button  onClick={openCalendly} className='all-btns'>FREE Consultation <FiArrowUpRight style={{ marginLeft: '4px' }} /></button>
                </div>
                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavBar} className='nav-btn'>
                <div className='cart-icon-container'>
                    <a href='/cart' className='cartIcon'>
                        <FaShoppingCart style={{ width: "25px", height: "25px", color: "#fff" }} />
                        {cartItemCount > 0 && <span className='cart-badge'>{cartItemCount}</span>}
                    </a>
                </div>
                <FaBars style={{ paddingTop: "6px" }} />
            </button>
        </header>
    );
}
