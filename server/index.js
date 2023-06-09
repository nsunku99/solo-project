const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 8080;
const db = require('./db/data.js');

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.get('/api/cards', (req, res) => {

  const filePath = path.resolve(__dirname, './db/restaurantData.json');
  // console.log('filePath', filePath);
  const data = fs.readFileSync(filePath);
  const jsonData = JSON.parse(data);
  console.log('GET: initial data from json read file', jsonData);

  res.status(200).setHeader('Content-Type', 'application/json').json(jsonData);
});

app.post('/api/cards', (req, res) => {

  const data = req.body;
  console.log('most recent state', data)
  db.sync(data)

  res.status(200).setHeader('Content-Type', 'application/json').json({ msg: 'success' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
