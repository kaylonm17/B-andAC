import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from './cards';
import WelcomeBanner from './WelcomeBanner';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Router> {/* This should be your top-level Router */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <header className="App-header">
              <div className="app">
                <WelcomeBanner />
              </div>
            </header>

          <body>
            <div className="app-container">
              <Card
                imageSrc="path-to-your-image1.jpg"
                title="Air Conditioning Services"
                description="We offer top-notch AC repair and installation services."
                imageOnRight={false}
              />
            </div>
            <div className="app-container">
              <Card
                imageSrc="path-to-your-image2.jpg"
                title="Heating Solutions"
                description="Stay warm with our reliable heating solutions."
                imageOnRight={true}
              />
            </div>
            <div className="app-container">
              <Card
                imageSrc="path-to-your-image1.jpg"
                title="Air Conditioning Services"
                description="We offer top-notch AC repair and installation services."
                imageOnRight={false}
              />
            </div>
          </body>
          </Route>
          {/* Add more routes for other services */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
