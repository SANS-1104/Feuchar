import React from 'react';
import './CourseDetail.css';

const ratings = [
  { stars: 5, percent: 95 },
  { stars: 4, percent: 60 },
  { stars: 3, percent: 40 },
  { stars: 2, percent: 15 },
  { stars: 1, percent: 10 },
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
