import React from 'react';
import './App.css'; // Import your CSS file for styling

const Card = ({ imageSrc, title, description, imageOnRight }) => {
  const cardClasses = imageOnRight ? 'card card-image-right' : 'card';

  return (
    <div className={cardClasses}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <img src={imageSrc} alt="Card" className="card-image" />
    </div>
  );
};

export default Card;