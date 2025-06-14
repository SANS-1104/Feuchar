import './webinarDetail.css'
import React, { useEffect, useState } from 'react';

export default function WebinarSeats({webinar}) {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-22T00:00:00'); // June 22, 2025
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

  return (
    <div className="WebinarSeats-wrapper">
      <div className="upper">
        <div className="left">ONLY FEW SEATS LEFT</div>
        <div className="right">
          {webinar.webinarSeatsLeft}
        </div>
      </div>
      <div className="lower">
        <div className="left">
          <div className="a">Early Bird Pricing Ends In:</div>
          <div className="b">
            <div className="timer">
              <div className="timerNum">{timeLeft.days}</div>
              <div className="timerDesc">DAYS</div>
            </div>
            <div className="colon">:</div>
            <div className="timer">
              <div className="timerNum">{timeLeft.hours}</div>
              <div className="timerDesc">HOURS</div>
            </div>
            <div className="colon">:</div>
            <div className="timer">
              <div className="timerNum">{timeLeft.minutes}</div>
              <div className="timerDesc">MINUTES</div>
            </div>
            <div className="colon">:</div>
            <div className="timer">
              <div className="timerNum">{timeLeft.seconds}</div>
              <div className="timerDesc">SECONDS</div>
            </div>
          </div>
        </div>
        <div className="right hideSmall">
          <img src='/images/webinar3.png' alt='' />
        </div>
      </div>
    </div>
  );
}
