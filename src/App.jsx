import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import EntryPage from './EntryPage';

function App() {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };


  return (
    <div>
      <Navbar onLogoClick={onLogoClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:locale" element={<Home />} />
          <Route path="/:locale/term/:termKey" element={<EntryPage />} />
        </Routes>

    </div>
  );
}

export default App;
