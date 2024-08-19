import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import terms from './terms.json';
import { linkTermsInDefinition } from './utils/linkTerms';
import { useTranslation } from 'react-i18next';
import './EntryPage.css'; // Ensure you have this CSS file for styling

const EntryPage = ({ onNewSearch }) => {
  const { termKey } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Decode the termKey to handle any encoded characters such as spaces
  const decodedTermKey = decodeURIComponent(termKey);
  console.log("Term Key:", decodedTermKey);

  const termData = terms[0]?.terms[decodedTermKey];
  console.log("Term Data:", termData);

  if (!termData) {
    return <div>{t('Term not found')}</div>;
  }

  const linkedDefinition = linkTermsInDefinition(termData.definition, terms[0].terms);
  console.log("Linked Definition:", linkedDefinition);

  const handleNewSearch = () => {
    onNewSearch(); // Clear search history
    navigate('/');
  };

  return (
    <div>
      <h1>{t(termData.term)}</h1>
      <p>{termData.phonetic}</p>
      <p><strong>{t('Category')}:</strong> {t(termData.termCategory)}</p>
      <p dangerouslySetInnerHTML={{ __html: linkedDefinition }}></p>
      <button className="new-search-button" onClick={handleNewSearch}>{t('New search')}</button>
    </div>
  );
};

export default EntryPage;
