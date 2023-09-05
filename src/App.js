import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './cards';
import WelcomeBanner from './WelcomeBanner';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Router> {/* This should be your top-level Router */}
        <Navbar />
        <Routes>
          <Route exact path="/">
            <header className="App-header">
              <div className="app">
                <WelcomeBanner />
              </div>
            </header>
          </Route>
          <Route exact path="/air-conditioning">
            <div className="app-container">
              <Card
                imageSrc="path-to-your-image1.jpg"
                title="Air Conditioning Services"
                description="We offer top-notch AC repair and installation services."
                imageOnRight={false}
              />
            </div>
          </Route>
          <Route exact path="/heating-solutions">
            <div className="app-container">
              <Card
                imageSrc="path-to-your-image2.jpg"
                title="Heating Solutions"
                description="Stay warm with our reliable heating solutions."
                imageOnRight={true}
              />
            </div>
          </Route>
          {/* Add more routes for other services */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
