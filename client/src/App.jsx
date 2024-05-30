import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Item from './pages/Item';
import Login from './pages/Login';

const App = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      {/* Redirect to /home if user is logged in, otherwise show login page */}
      <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

      {/* Redirect to /login if user is not logged in */}
      <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      <Route path="/item/:id" element={user ? <Item /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
