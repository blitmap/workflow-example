// Import express module
import express from 'express';

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

// Export the app so that it can be used in tests
export default app;

// Start the server only if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

