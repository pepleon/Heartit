// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import TwoSections from './components/TwoSections';
import CardSlider from './components/CardSlider';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <TwoSections />
      <CardSlider className="cardslide"/>
      <Footer/>
    </div>
  );
}

export default App;
