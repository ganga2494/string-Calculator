const express = require('express');
const StringCalculator = require('./StringCalculator');

const app = express();
const calculator = new StringCalculator();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});