import React from 'react';
import './WelcomeBanner.css'; // Import your CSS file for styling

const WelcomeBanner = () => {
  return (
    <header className="header">
      <div className="welcome-banner">
        <div className="banner-content">
          <h1>Welcome to B and AC</h1>
          <p>Problem solving made simple</p>
          <button>Get an estimate</button>
        </div>
      </div>
    </header>
  );
};

export default WelcomeBanner;