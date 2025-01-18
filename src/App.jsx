import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import LiveFeed from './components/LiveFeed';
import About from './components/About';
import Landing from './components/Landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/livefeed" element={<LiveFeed/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
  </Router>
  );
}


export default App;
