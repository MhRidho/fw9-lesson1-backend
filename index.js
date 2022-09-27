require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Backend is running well'
  });
});

// app.use('/', require('./src/routes'));
app.use('/', require('./src/routes'));

app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'Resource not found'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Port is running on port ${process.env.PORT}`);
});
