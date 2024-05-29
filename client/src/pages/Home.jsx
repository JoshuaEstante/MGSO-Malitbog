import React, { useState } from 'react';
import PARlist from '../components/PARlist';
import PARform from '../components/PARform';

const Home = () => {
  const [showPARform, setShowPARform] = useState(false);

  const togglePARform = () => {
    setShowPARform(!showPARform);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">MGSO Malitbog</h1>
        <p className="text-lg text-gray-600 mb-10 text-center">Record Keeping Application</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-6"
          onClick={togglePARform}
        >
          Add Item
        </button>
        {showPARform && <PARform />}
        <PARlist />
      </div>
    </div>
  );
};

export default Home;
