const express = require('express');
const bodyParser = require('body-parser');
const ps4Routes = require('./routes/ps4Routes');

const app = express();

// Load environment variables from .env file
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ps4', ps4Routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
