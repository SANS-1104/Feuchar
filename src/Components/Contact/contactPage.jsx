
import { FaInstagram, FaTiktok, FaXTwitter, FaPhone, FaEnvelope, FaYoutube  } from "react-icons/fa6";
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm2 from "./ContactForm2";
import "./contact.css";  
 // adjust the path as needed


export default function ContactPage(){
    return(
        <div className="outerWrapper">
            <div className="innerWrapper">
                <div className="level1">
                    <div className="top1">Contact Us</div>
                    <div className="top2">Get in Touch</div>
                    <div className="top3">
                        <div className="top31">Have questions? We're here for you. </div>
                        <div className="top31">&nbsp; Drop us a line, write us </div>
                        <div className="top31">&nbsp; an email, or send us a text.</div>
                    </div>
                </div>
                <div className="level2">
                    <div className="left">
                        <div className="leftcol1">
                            <div className="l1">
                                <div className="title">Contact Information</div>
                                <div className="desc">Say something to start a live chat!</div>
                            </div>
                            <div className="l2">
                                <div className="contacts">
                                    <p><FaPhone /> &nbsp;+91 8368922314</p>
                                    <p><FaEnvelope />&nbsp;   <a href='mailto:contact@feuchar.com'>  contact@feuchar.com</a> </p>
                                    <p><FaMapMarkerAlt /> B-1422, New Ashok Nagar, <br></br> Delhi, 110096 </p>
                                </div>
                                <div className="socials">
                                    <div className='socialIcon'>
                                        {/* <div className='socialIcon1'><a href="" target="blank"><FaTiktok/></a></div> */}
                                        <div className='socialIcon1'><a href="https://www.instagram.com/feucharsocial" target="blank"><FaInstagram/></a></div>
                                        <div className='socialIcon1'><a href="https://www.youtube.com/@feucharsocial" target="blank"><FaYoutube/></a></div>
                                        <div className='socialIcon1'><a href="https://x.com/feucharX" target="blank"><FaXTwitter/></a></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="leftcol2">
                            <div className="l3"><div className="socialGlobe"><img src="/images/contactglobe.png" alt=""/></div></div>
                        </div>
                    </div>
                    <div className="right">
                        <ContactForm2 />
                    </div>
                </div>
            </div>
        </div>
        
    )
}
