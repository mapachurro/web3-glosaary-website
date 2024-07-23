const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const results = [];

// Read the CSV file
fs.createReadStream(path.join(__dirname, 'terms-1.4.9.2.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Process the CSV data
    const jsonOutput = results.reduce((acc, row) => {
      const term = row['Term'];
      const phonetic = row['phonetic'];
      const partOfSpeech = row['Part of speech'];
      const definition = row['Definition'];
      const termCategory = row['Term Category'];

      acc.terms[term] = {
        term,
        phonetic,
        partOfSpeech,
        definition,
        termCategory
      };

      return acc;
    }, { terms: {} });

    // Write to JSON file
    fs.writeFileSync(path.join(__dirname, 'glossary.json'), JSON.stringify(jsonOutput, null, 2), 'utf8');
    console.log('CSV file successfully processed and JSON file created.');
  });
