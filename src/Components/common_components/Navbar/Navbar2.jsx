import React, { useRef, useState, useEffect } from 'react';
import './navbar.css';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../../api/axiosClient'; 
import { toast } from 'react-toastify';
import { useCart } from "../../../../src/context/CartContext"

export default function Navbar2() {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navRef = useRef();
    const dropdownRef = useRef();
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const user = JSON.parse(localStorage.getItem("user")) || {};
    const fullName = user.name || "User";

    // Slugified version of user name
    // const slug = user?.slug ?? encodeURIComponent(user.name.trim().replace(/\s+/g, "-").toLowerCase());
    
    const slug = user?.slug ?? encodeURIComponent(user.name.trim());

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
            await axiosClient.post("/logout");
            toast.success("Logged out successfully.");
        } catch (error) {
            toast.error("Logout failed. Logging out locally.");
        } finally {
            localStorage.clear();
            navigate("/");
            window.dispatchEvent(new Event("storage"));
        }
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header>
            <Link to="/" className='part1'>
                <img src='/images/navLogo3.jpg' alt="Logo" className='logo' />
            </Link>

            <nav ref={navRef} className='part2'>
                <div className='part2a'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/webinar">Webinar</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className='part2b'>
                    {/* Cart Icon */}
                    <div className='cart-icon-container'>
                        <Link to="/cart" className='cartIcon'>
                            <FaShoppingCart style={{ width: "25px", height: "25px" }} />
                            {cartItemCount > 0 && <span className='cart-badge'>{cartItemCount}</span>}
                        </Link>
                    </div>

                    {/* User Dropdown */}
                    <div className="user-container" ref={dropdownRef}>
                        <img 
                            src="/images/dp.jpg" 
                            alt="User" 
                            className="user-icon"
                            onClick={toggleDropdown}
                        />
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <p className="dropdown-user">{fullName}</p>
                                <Link to={`/dashboard/${slug}/overview`} onClick={() => setShowDropdown(false)}>Dashboard</Link>
                                <Link to={`/dashboard/${slug}/mycourse`} onClick={() => setShowDropdown(false)}>My Courses</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>

                <button onClick={showNavBar} className='nav-btn nav-close-btn'>
                    <FaTimes />
                </button>
            </nav>

            <button onClick={showNavBar} className='nav-btn'>
                <FaBars />
            </button>
        </header>
    );
}
