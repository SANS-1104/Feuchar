import React, { useRef, useEffect, useState } from "react";
import ContinueTopic from "../../data/ContinueWatching";
import "./overview.css";

export default function ContinueWatching() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const fullName = user?.name ;

  const scrollRef = useRef();

  const scrollLeft = () => {
    console.log("Scroll Left clicked");
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    console.log("Scroll Right clicked");
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="ContinueWatching-wrapper">
      <div className="upper">
        <div className="title">Continue watching</div>
        <div className="scrollControls">
          <div className="leftControl control">
            <button onClick={scrollLeft}>
              <img src="/images/leftControl.png" alt="" />
            </button>
          </div>
          <div className="rightControl control">
            <button onClick={scrollRight}>
              <img src="/images/rightControl.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="lower" ref={scrollRef}>
        <div className="lower-inner">
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
      </div>
    </div>
  );
}
