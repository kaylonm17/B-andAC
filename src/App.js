import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Card from './cards';
import WelcomeBanner from './WelcomeBanner';
import Footer from './footer';

function App() {
  return (
    
    <div className="App">
            <Navbar />
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

      </body>
      <Footer></Footer>
    </div>
  );
}

export default App;
