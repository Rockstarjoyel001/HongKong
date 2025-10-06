const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000;

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Optional API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Fallback for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
