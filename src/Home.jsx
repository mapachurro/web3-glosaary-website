import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search'; // Ensure Search is imported
import index from './searchIndex';
import terms from './terms.json';
import { useTranslation } from 'react-i18next';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      <h2>{t('Search the Education DAO Glossary:')}</h2>
      <Search onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li
            key={result.term}
            onClick={() => navigate(`/term/${encodeURIComponent(result.term)}`)}
            style={{
              cursor: allTerms.includes(result.term) ? 'pointer' : 'default',
            }}
          >
            {result.term}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
