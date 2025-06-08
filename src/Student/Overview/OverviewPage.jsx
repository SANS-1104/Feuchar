import { useState, useEffect } from "react";
import ContinueWatching from "./ContinueWatching";
import OverviewSearchBar from "./OverviewSearchbar";
import OverviewSkillSharp from "./OverviewSkillSharp";
import OverviewWatchedModules from "./OverviewWatchedModules";
import RightSide from "./RightSide";
import YourMentors from "./YourMentors";
import "./overview.css";
import { FaBars } from "react-icons/fa";

export default function OverviewPage({ fullName }) {
  const [showSidebar, setShowSidebar] = useState(false);

  // Optional: Prevent body scroll when sidebar is open (for mobile)
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  return (
    <div className="OverviewWrapper">
      <div className="left">
        <OverviewSearchBar />
        <OverviewSkillSharp />
        <OverviewWatchedModules />
        <ContinueWatching />
        <YourMentors />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={() => setShowSidebar(true)}>
        <FaBars />
      </div>

      {/* Sidebar Overlay for smaller screens */}
      <div className={`sidebar-overlay ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-close" onClick={() => setShowSidebar(false)}>
          ✖
        </div>
        <RightSide />
      </div>

      {/* Normal RightSide for large screens */}
      <div className="right desktop-only">
        <RightSide />
      </div>
    </div>
  );
}
