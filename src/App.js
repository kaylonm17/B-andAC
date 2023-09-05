import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Switch correctly
import { Link } from 'react-router-dom';
import Card from './cards';
import WelcomeBanner from './WelcomeBanner';
import Footer from './footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Route exact path='/'>
          <header className="App-header">
          <div className="app">
            <WelcomeBanner />
          </div>
        </header>  
          </Route>

          <div className="app-container">
            <Card
              imageSrc="path-to-your-image1.jpg"
              title="Air Conditioning Services"
              description="We offer top-notch AC repair and installation services."
              imageOnRight={false}
            />
            <Card
              imageSrc="path-to-your-image2.jpg"
              title="Heating Solutions"
              description="Stay warm with our reliable heating solutions."
              imageOnRight={true}
            />
            <Card
              imageSrc="path-to-your-image2.jpg"
              title="Heating Solutions"
              description="Stay warm with our reliable heating solutions."
              imageOnRight={false}
            />
            {/* Add more alternating cards as needed */}
          </div>

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
