import React from 'react';
import logoImage from '../../public/MGSO.jpg'; // Import your icon image

const Header = () => {
  return (
    <header className="bg-black-olive py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your icon image with adjusted height */}
        <img src={logoImage} alt="Icon" className="h-16" />
        
        <h1 className="text-2xl font-bold text-white">MGSO Malitbog</h1>
        <nav>
          <ul className="flex space-x-4 text-white">
            <li className="font-bold">Record Keeping Application</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
