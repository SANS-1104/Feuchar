import { useState, useEffect } from "react";
import ContinueWatching from "./ContinueWatching";
import OverviewSearchBar from "./OverviewSearchbar";
import OverviewSkillSharp from "./OverviewSkillSharp";
import OverviewWatchedModules from "./OverviewWatchedModules";
import RightSide from "./RightSide";
import YourMentors from "./YourMentors";
import "./overview.css";

export default function OverviewPage({ fullName }) {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  return (
    <div className="OverviewWrapper">
      <div className="left">
        <OverviewSearchBar />
        <OverviewSkillSharp />
        {/* <OverviewWatchedModules />
        <ContinueWatching /> */}
        <YourMentors />
      </div>

      {/* This will show up on large screens */}
      <div className="right desktop-only">
        <RightSide />
      </div>

      {/* Hamburger/dp icon for mobile */}
      <div className="dp-icon" onClick={() => setShowSidebar(!showSidebar)}>
        {showSidebar ? (
          <span className="cross-icon">✖</span>
        ) : (
          <img src="/images/dp.jpg" alt="Profile" />
        )}
      </div>

      {/* Overlay sidebar for mobile */}
      <div className={`sidebar-overlay ${showSidebar ? "show" : ""}`}>
        <RightSide />
      </div>
    </div>
  );
}
