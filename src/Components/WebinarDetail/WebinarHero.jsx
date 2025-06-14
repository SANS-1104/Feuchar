import React, { useEffect, useState } from 'react';
import './webinarDetail.css';
import { useNavigate } from 'react-router-dom';
export default function WebinarHero({webinar}) {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-06-22T00:00:00');
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
        };

        if (difference > 0) {
        timeLeft = {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
        };
        }

        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/webinar-tickets/${webinar.urlTitle}`, { state: { webinar } });
    };


    return (
        <div className="webinar-outer-wrapper">
            <div className="WebinarHero-wrapper">
                <div className="Images-Overlay">
                    <img src="/images/webinar1.jpg" className="base-img" alt="Base" />
                    <img src="/images/webinarOverlay.png" className="overlay-img" alt="Overlay" />
                    <div className="overlayText">
                        <div className="level1">{webinar.webinarHerot1} </div>
                        <div className="level2">{webinar.webinarHerot2}</div>
                        <div className="level3">
                            <div className="timer">
                                <div className="timerTime">{timeLeft.days}</div>
                                <div className="timerDesc">Days</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">{timeLeft.hours}</div>
                                <div className="timerDesc">Hours</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">{timeLeft.minutes}</div>
                                <div className="timerDesc">Mins</div>
                            </div>
                            <div className="colon">:</div>
                            <div className="timer">
                                <div className="timerTime">{timeLeft.seconds}</div>
                                <div className="timerDesc">Secs</div>
                            </div>
                        </div>
                        <div className="level4">
                            {webinar.webinarHerot3}
                        </div>
                    </div>
                </div>
                <div className="ticketBtn">
                    <button onClick={handleNavigation}>Get Tickets at just ₹{webinar.newPrice} <span className='noPrice'>(₹{webinar.oldPrice})</span> </button>
                </div>
            </div>

        </div>
    );
}
