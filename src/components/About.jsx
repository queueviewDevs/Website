import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 lg:px-40 py-40">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Left Section: Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-400 mb-6">About Us</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are a team of passionate individuals committed to delivering
                top-notch solutions. Our mission is to just save time and energy
                instead of waiting on long lines.
              </p>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/apisan/', '_blank')}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Learn More
              </button>
            </div>

            {/* Right Section: Image */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Image or additional content can be placed here */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;