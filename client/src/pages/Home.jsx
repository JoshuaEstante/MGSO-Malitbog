  import React, { useState } from 'react';
  import PARlist from '../components/PARlist';
  import PARform from '../components/PARform';
  import Header from '../components/Header';
  import Footer from '../components/Footer';

  const Home = () => {
    const [showPARform, setShowPARform] = useState(false);

    const togglePARform = () => {
      setShowPARform(!showPARform);
    };

    return (
      <div className="bg-timberwolf min-h-screen pt-24 pb-8 "> {/* Set background color to cover entire page */}
        <Header />
        <div className="flex flex-col items-center justify-center p-8">
          <div className="bg-white p-4 rounded-lg w-full max-w-full">
            <button
              className="bg-onyx hover:bg-dim-gray text-white font-bold py-2 px-16 rounded-lg mb-6 border rounded-md shadow-sm"
              onClick={togglePARform}
            >
              Add Item
            </button>
            {showPARform && <PARform />}
            <PARlist />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  export default Home;
