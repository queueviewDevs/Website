import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router';

const Landing = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white flex-grow py-80 text-center">
        
        <h1 className="text-xl font-bold mb-4"> <TypeAnimation
      sequence={[
        'Queue View.', 2000,
        '', 1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    /></h1>
        <p className="text-lg mb-6">Bleh Bleh Bleh.</p>
        <div>
          <Link to="/livefeed">
          <button onClick={() => setActiveTab("liveview")}className="bg-white text-purple-900 font-medium px-6 py-2 rounded-lg shadow hover:bg-gray-100 mx-2">
           Click to Watch Live View
          </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-gray-300 px-8 flex-grow text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p>Experience easy......</p>
          </div>
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Real-Time Interaction</h3>
            <p>....</p>
          </div>
          <div className="max-w-sm text-gray-300 p-6 border rounded-lg shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Multi-Device Support</h3>
            <p>Stream from anywhere on any device.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600 mb-2">© 2025 QueueView. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          {/*
          <a href="/terms" className="text-green-500 hover:underline">
            Terms of Service
          </a>
          <a href="/privacy" className="text-green-500 hover:underline">
            Privacy Policy
          </a>*/}
        </div> 
      </footer>
    </div>
  );
};

export default Landing;
