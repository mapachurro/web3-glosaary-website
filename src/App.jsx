import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import index from './searchIndex';
import terms from './terms.json';
import Navbar from './components/Navbar';
import Home from './Home';
import EntryPage from './EntryPage';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate('/');
  };

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    const results = index.search(query);
    console.log('Search results:', results);
    const formattedResults = results.map((result) => ({
      term: result.ref,
    }));
    setSearchResults(formattedResults);
    console.log('Updated searchResults:', formattedResults);
  };

  const allTerms = Object.keys(terms[0].terms);

  return (
    <div>
      <Navbar onLogoClick={onLogoClick} />
      <Routes>
        <Route path="/:locale" element={<Home />} />
        <Route path="/:locale/term/:termKey" element={<EntryPage />} />
        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;
