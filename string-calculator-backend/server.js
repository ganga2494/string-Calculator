const express = require('express');
const StringCalculator = require('./StringCalculator');
const cors = require('cors');  

const app = express();
const calculator = new StringCalculator();
app.use(cors());

app.use(express.json());
app.post('/add', (req, res) => {
  const { numbers } = req.body;
  try {
    const result = calculator.add(numbers);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});