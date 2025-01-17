import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import LiveFeed from './components/LiveFeed';
import About from './components/About';
import Landing from './components/Landing';

function App() {
  const [activeTab, setActiveTab] = useState("liveview");

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/livefeed" element={<LiveFeed/>} />
    </Routes>
  </Router>
  );
}

export default App;
