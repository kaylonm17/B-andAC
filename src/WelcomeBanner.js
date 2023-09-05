import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeBanner.css'; // Import your CSS file for styling


const WelcomeBanner = () => {
  return (
    
    <header className="header">
      <div className="welcome-banner">
        <div className="banner-content font-color">
        
          <h1 className="font-color">Welcome to B and AC</h1>
          <p>Problem solving made simple</p>
          <ul>
            <li>
              <Link to="./App2">Get an estimate</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default WelcomeBanner;
