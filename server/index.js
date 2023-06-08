const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
