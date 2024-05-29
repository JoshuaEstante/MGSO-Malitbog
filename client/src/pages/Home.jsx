import React from 'react';
import PAR from '../components/PAR';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">MGSO Malitbog</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">Record Keeping Application</p>
        <PAR />
      </div>
    </div>
  );
};

export default Home;
