// src/Components/WatchedCourses.jsx
import React from 'react';
import WatchedModules from '../../data/WatchedModules';
import "./overview.css"

const OverviewWatchedModules = () => {
  return (
    <div className="OverviewWatchedModules-wrapper-outer">
        <div className="OverviewWatchedModules-wrapper">
        {WatchedModules.map((module, index) => (
            <div className="OverviewWatched-card" key={index}>
                <div className="WatchMod-left">
                    <img src='/images/overviewIcon1.png' alt='' />
                </div>
                <div className="WatchMod-mid">
                    <div className='a'>{module.currentWatchMod} / {module.TotalMod} Watched</div>
                    <div className='b'>{module.CourseName}</div>
                </div>
                <div className="WatchMod-right"> 
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6667 5C14.6667 3.9 13.7667 3 12.6667 3C11.5667 3 10.6667 3.9 10.6667 5C10.6667 6.1 11.5667 7 12.6667 7C13.7667 7 14.6667 6.1 14.6667 5Z" stroke="#7E7E7E" stroke-width="1.5"/>
                        <path d="M14.6667 19C14.6667 17.9 13.7667 17 12.6667 17C11.5667 17 10.6667 17.9 10.6667 19C10.6667 20.1 11.5667 21 12.6667 21C13.7667 21 14.6667 20.1 14.6667 19Z" stroke="#7E7E7E" stroke-width="1.5"/>
                        <path d="M14.6667 12C14.6667 10.9 13.7667 10 12.6667 10C11.5667 10 10.6667 10.9 10.6667 12C10.6667 13.1 11.5667 14 12.6667 14C13.7667 14 14.6667 13.1 14.6667 12Z" stroke="#7E7E7E" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default OverviewWatchedModules;
