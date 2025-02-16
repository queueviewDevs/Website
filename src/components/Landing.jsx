import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router';
import Footer from './Footer.jsx';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white flex-grow py-80 text-center">
        
        <h1 className="text-xl font-bold mb-4"> <TypeAnimation
      sequence={[
        'QueueView', 2000,
        '', 1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
        <p className="text-lg mb-6">No one likes to wait in line</p>
        <div>
          <Link to="/liveview">
          <button className="bg-white text-purple-900 font-medium px-6 py-2 rounded-lg shadow hover:bg-gray-100 mx-2">
           Click to Watch Live View
          </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-gray-300 px-8 flex-grow text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
          </div>
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Real-Time Interaction</h3>
          </div>
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Multi-Device Support</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
