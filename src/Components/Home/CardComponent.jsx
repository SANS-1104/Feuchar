// Components/common_components/CardComponent.js
import React from 'react';
import './HomeCSS.css'

function CardComponent({ imageSrc, title, description1,height, width }) {
  return (
    <div className="card" style={{width: width, height: height}}>
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description1}</p>
    </div>
  );
}

export default CardComponent;
