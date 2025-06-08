import React, { useEffect, useState } from "react";
import { FaBell } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import './overview.css';

export default function RightSide() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const firstName = user?.name ? user.name.split(" ")[0] : "";

  return (
    <div className="RightSide-wrapper">
      <div className="upper">
        <div className="l1">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6667 5C14.6667 3.9 13.7667 3 12.6667 3C11.5667 3 10.6667 3.9 10.6667 5C10.6667 6.1 11.5667 7 12.6667 7C13.7667 7 14.6667 6.1 14.6667 5Z" stroke="#7E7E7E" strokeWidth="1.5"/>
            <path d="M14.6667 19C14.6667 17.9 13.7667 17 12.6667 17C11.5667 17 10.6667 17.9 10.6667 19C10.6667 20.1 11.5667 21 12.6667 21C13.7667 21 14.6667 20.1 14.6667 19Z" stroke="#7E7E7E" strokeWidth="1.5"/>
            <path d="M14.6667 12C14.6667 10.9 13.7667 10 12.6667 10C11.5667 10 10.6667 10.9 10.6667 12C10.6667 13.1 11.5667 14 12.6667 14C13.7667 14 14.6667 13.1 14.6667 12Z" stroke="#7E7E7E" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="l2">
          <div className="l2a">
            <div className="l2b">
              <img src='/images/dp.jpg' alt='' />
            </div>
          </div>
        </div>
        <div className="l3">
          <div className="a">Good Morning {firstName}</div>
          <div className="b">continue your journey and achieve<br />Your Target</div>
          <div className="c">
            <div className="c1"><FaBell /></div>
            <div className="c1"><FaMessage /></div>
          </div>
        </div>
      </div>
      <div className="lower"></div>
    </div>
  );
}
