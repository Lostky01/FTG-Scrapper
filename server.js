const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/games', (req, res) => {
  axios.get('https://www.freetogame.com/api/games')
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
