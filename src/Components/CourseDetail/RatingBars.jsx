import React from 'react';
import './CourseDetail.css';

const ratings = [
  { stars: 5, percent: 95 },
  { stars: 4, percent: 80 },
  { stars: 3, percent: 65 },
  { stars: 2, percent: 50 },
  { stars: 1, percent: 35 },
];

const RatingBars = () => {
  return (
    <div className="rating-container">
      {ratings.map((rating) => (
        <div className="rating-row" key={rating.stars}>
          <span className="star">⭐</span>
          <span className="star-number">0{rating.stars}</span>
          <div className="bar-container">
            <div
              className="bar-fill"
              style={{ width: `${rating.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingBars;
