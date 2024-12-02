import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Tracker</h1>
      <p className="text-lg mb-6">
        Monitor your devices and keep track of your data effortlessly.
      </p>
      <a
        href="/dashboard" // Link to your dashboard or sign-up page
        className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
      >
        Get Started
      </a>
    </div>
  );
};

export default LandingPage;
