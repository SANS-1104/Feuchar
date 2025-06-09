// import { useState } from 'react';
import './webinar.css';
import { useNavigate } from 'react-router-dom';

export default function WebinarHero() {
    // const [showContent, setShowContent] = useState(false);

    // const handleClick = () => {
    //     setShowContent(true);
    // };

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/webinar-tickets');  // Change '/tickets' to your desired route
    };

    return (
        <div className="webinar-outer-wrapper">
            <div className="WebinarHero-wrapper">
                <div className="Images-Overlay">
                    <img src="/images/webinar1.jpg" className="base-img" alt="Base" />
                    <img src="/images/webinarOverlay.png" className="overlay-img" alt="Overlay" />
                    <div className="overlayText">
                        <div className="level1">Unlock Life's Secrets with Just Your Numbers</div>
                        <div className="level2">Numerology Power packed 3 Hour live webinar</div>
                        <div className="level3">
                            <div className="timer">
                                <div className="timerTime">31</div>
                                <div className="timerDesc">Days</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">16</div>
                                <div className="timerDesc">Hours</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">20</div>
                                <div className="timerDesc">Mins</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">50</div>
                                <div className="timerDesc">Secs</div>
                            </div>
                        </div>
                        <div className="level4">
                            LEARN NUMEROLOGY TO SOLVE ALL YOUR HEALTH, RELATIONSHIP & CAREER PROBLEMS
                        </div>
                    </div>
                </div>
                <div className="ticketBtn">
                    {/* <button onClick={handleClick}>Get Tickets at just ₹99.00</button> */}
                    <button onClick={handleNavigation}>Get Tickets at just ₹99.00</button>
                </div>
            </div>

            {/* Conditionally show content only if showContent is true */}
            {/* {showContent && (
                <div className="btn-click-content">
                    <div className="upper">
                        <div className="l1">Event Details</div>
                        <div className="l2">
                            <div className="a">
                                <div className="a1">Start Date: May 30, 2025</div>
                                <div className="a1">Start Time: 10:00 PM</div>
                            </div>
                            <div className="a">
                                <div className="a1">End Date: June 30, 2025</div>
                                <div className="a1">End Time: 7:00 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="l1">Tickets</div>
                    </div>
                </div>
            )} */}
        </div>
    );
}
