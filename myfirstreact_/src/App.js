import react from 'react';
import { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="Container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}