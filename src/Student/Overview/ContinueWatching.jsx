import React, { useRef, useEffect, useState } from "react";
import ContinueTopic from "../../data/ContinueWatching";
import "./overview.css";
import { useNavigate } from 'react-router-dom';

export default function ContinueWatching() {
  const navigate = useNavigate();
  const handleContinueWatch = () => {
    navigate('/courses');
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const fullName = user?.name;
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="ContinueWatching-wrapper">
      <div className="upper">
        <div className="title">Continue watching</div>
        {ContinueTopic.length > 0 && (
          <div className="scrollControls">
            <div className="leftControl control">
              <button onClick={scrollLeft}>
                <img src="/images/leftControl.png" alt="Scroll Left" />
              </button>
            </div>
            <div className="rightControl control">
              <button onClick={scrollRight}>
                <img src="/images/rightControl.png" alt="Scroll Right" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="lower">
        {ContinueTopic.length === 0 ? (
          <div className="no-courses-message">
            <button className="buy-course-btn" onClick={handleContinueWatch}>
              No courses purchased yet. Click to purchase our life changing courses
            </button>
          </div>
        ) : (
          <div className="lower-inner" ref={scrollRef}>
            {ContinueTopic.map((topic, idx) => (
              <div className="ContinueWatch-card" key={idx}>
                <div className="l1">
                  <img src={topic.topicImage} alt="" />
                </div>
                <div className="l2">{topic.topicName}</div>
                <div className="l3"></div>
                <div className="l4">
                  <div className="l41">
                    <img src="/images/dp.jpg" alt="" />
                  </div>
                  <div className="l42">
                    <div className="a">{fullName}</div>
                    <div className="b">Student</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
