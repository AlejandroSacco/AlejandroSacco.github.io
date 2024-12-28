const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/saga-info', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'saga-info.html'));
});

app.get('/saga-index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'saga-index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});