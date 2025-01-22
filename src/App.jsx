import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LiveView from './components/LiveView';
import About from './components/About';
import Landing from './components/Landing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/liveview" element={<LiveView/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
  </Router>
  );
}


export default App;
