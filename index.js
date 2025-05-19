// Import express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Create a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Another route
app.get('/about', (req, res) => {
  res.send('This is the About page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
