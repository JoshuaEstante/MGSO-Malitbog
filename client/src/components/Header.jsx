import React from 'react';
import logoImage from '../../public/MGSO.jpg'; // Import your icon image
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="fixed top-0 w-full bg-black-olive py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your icon image with adjusted height */}
        <img src={logoImage} alt="Icon" className="h-16" />
        
        <h1 className="text-2xl font-bold text-white">MGSO Malitbog</h1>
        
        <nav className="flex items-center">
          <ul className="flex space-x-4 text-white">
            <li className="font-bold">Record Keeping Application</li>
          </ul>
          {/* Show logout button if user is logged in */}
          {user && (
            <button 
              onClick={handleLogout} 
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
