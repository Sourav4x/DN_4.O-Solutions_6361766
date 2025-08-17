import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import React from 'react';
function App() {
  return (
    <div className="Container">
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
