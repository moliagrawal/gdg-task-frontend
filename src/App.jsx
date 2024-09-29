import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import GetToKnowUs from './components/GetToKnowUs.jsx';
import Stats from './components/Stats.jsx';
import Technologies from './components/Technologies';
import FAQs from './components/FAQs';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Router>
        <Header />
        <Home />
        <GetToKnowUs />
        <Stats />
        <Technologies />
        <FAQs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
