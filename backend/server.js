const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = 8080;

// App middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

// Search API
app.get('/search', async (req, res) => {
  try {
    const term = req.query.term;
    const media = req.query.media;

    // Updated import statement
    const fetch = await import('node-fetch');

    const response = await fetch.default(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=30`);
    const data = await response.json();
    // Send the search results as JSON
    res.json({ results: data.results });
  } catch (error) {
    // Handle errors and send as JSON
    res.status(500).json({ message: 'There seems to be an error' });
  }
});

// Serve static files for the React frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route for the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
