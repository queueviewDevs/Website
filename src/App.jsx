import { useState } from 'react';
import Navbar from './components/Navbar';
import LiveFeed from './components/LiveFeed';
import About from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState("liveview");

  return (
    <>
      <div>
        <Navbar setActiveTab={setActiveTab} />
      </div>
      {activeTab === "liveview" && <LiveFeed />} 
      {activeTab === "about" && <About />} 
      
    </>
  );
}

export default App;
