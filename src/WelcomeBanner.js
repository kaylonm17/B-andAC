import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import './WelcomeBanner.css'; // Import your CSS file for styling
import App2 from './App2'; // Import the App2 component

const WelcomeBanner = () => {
  return (
    
    <header className="header">
      <div className="welcome-banner">
        <div className="banner-content font-color">
        
          <h1 className="font-color">Welcome to B and AC</h1>
          <p>Problem solving made simple</p>
          <Link to="./App2">
          <button>Get an estimate</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default WelcomeBanner;
