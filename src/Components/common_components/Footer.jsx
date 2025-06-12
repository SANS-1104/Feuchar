import React from 'react'
import '../CSS/main.css'
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaPhone, FaEnvelope, FaYoutube } from "react-icons/fa6";
import ContactForm from './ContactForm';


export default function Footer() {
  return (
    <div className='footer-outer-cover'>
        <div className='footer-inner-cover'>
            <div className='l1'>
                Make Astrology Great Again with Feuchar<span className='footerImg'>  <img  src='/images/footerImg.png' alt=''/></span>
            </div>
            <div className='l2'>
                <div className='left'>
                    <div className='nav left-col'>
                        <h2>Navigation</h2>
                        <a href='/home'><p>Home</p></a>
                        <a href='/about'><p>About</p></a>
                        <a href='/courses'><p>Courses</p></a>
                        <a href='/webinar'><p>Webinar</p></a>
                        <a href='/login'><p>Login</p></a>
                    </div>
                    <div className='car-sup left-col'>
                        <h2>Career</h2>
                        <a href='/tutor'><p>Apply as Astro-Guru</p></a>
                        <h2>Support</h2>
                        <a href='/privacy-Policy'><p>Privacy Policy</p></a>
                        <a href='/terms-of-service'><p>Term of Service</p></a>
                        <a href='/refund-policy'><p>Refund Policy</p></a>
                        <a href='/contact'><p>Contact us </p></a>
                    </div>
                    <div className='contact left-col'>
                        <h2>Contact Information</h2>
                        <p><FaPhone /><a href="tel:+918368922314">+91 8368922314</a> </p>
                        <p><FaEnvelope />  <a href='mailto:contact@feuchar.com'> contact@feuchar.com</a> </p>
                    </div>
                </div>
                <div className='right'>
                    <h2>Sign up for our latest news </h2>
                    <ContactForm />
                </div>
            </div>
            <div className='l3'>
                <div className='socials'>
                    {/* <div className='socialIcon'><a href=''><FaFacebook/></a></div>
                    <div className='socialIcon'><a href=''><FaTiktok/></a></div> */}
                    <div className='socialIcon'><a href='https://x.com/feucharX' target='blank'><FaXTwitter/></a></div>
                    <div className='socialIcon'><a href='https://www.youtube.com/@feucharsocial' target='blank'><FaYoutube/></a></div>
                    <div className='socialIcon'><a href='https://www.instagram.com/feucharsocial' target='blank'><FaInstagram/></a></div>
                    
                </div>
                <div className='copyright'>© 2025, Feuchar Powered By KreatorSwing Pvt. Ltd.</div>
            </div>
        </div>
    </div>
  )
}
