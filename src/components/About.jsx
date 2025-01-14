import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-400 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a team of passionate individuals committed to delivering
            top-notch solutions. Our mission is to just save time and energy instead of wating on long lines.
          </p>
          <button onClick={() => window.open("https://www.linkedin.com/in/apisan/", "_blank")}
           className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/500"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
);
}

export default About;
