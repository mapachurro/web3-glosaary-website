import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search';
import index from './searchIndex';
import terms from './terms.json';
import { useTranslation } from 'react-i18next';

function Home() {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    const results = index.search(query);
    const formattedResults = results.map((result) => ({
      term: result.ref,
    }));
    setSearchResults(formattedResults);
  };

  const handleClick = (term) => {
    console.log(`You clicked on: ${term} in ${i18n.language}`);
    navigate(`/${i18n.language}/term/${encodeURIComponent(term)}`);
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
            onClick={() => handleClick(result.term)}
            style={{
              cursor: allTerms.includes(result.term) ? 'pointer' : 'default',
            }}
          >
            {t(result.term)} {/* Use t() to translate term if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
