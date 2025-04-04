import { BrowserRouter as Router, Routes, Route } from 'react-router';
import LiveView from './components/LiveView';
import About from './components/About';
import Landing from './components/Landing';
import Admin from './components/Admin';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/liveview" element={<LiveView/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
  </Router>
  );
}


export default App;
