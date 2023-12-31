import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Card from './cards';
import WelcomeBanner from './WelcomeBanner';
import Footer from './footer';
import Estimate from "./App2";
import TOS from "./App3";
import EndPage from "./App4";


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
          <Route path="/App2">
            <Estimate/>
          </Route>
          <Route path="/App3">
            <TOS/>
          </Route>
          <Route path="/App4">
            <EndPage/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
