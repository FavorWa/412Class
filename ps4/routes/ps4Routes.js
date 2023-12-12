const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/promise', (req, res) => {
  const artistId = req.body.artistId;

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/artists/',
    params: {
      ids: artistId,
    },
    headers: {
      'X-RapidAPI-Key': process.env.SPOTIFY_API_KEY,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  // Using Promises with 'axios'
  axios.request(options)
    .then((response) => res.render('result', { data: response.data }))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error');
    });
});

router.post('/async-await', async (req, res) => {
  const artistId = req.body.artistId;

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/artists/',
    params: {
      ids: artistId,
    },
    headers: {
      'X-RapidAPI-Key': process.env.SPOTIFY_API_KEY,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  // Using async/await with 'axios'
  try {
    const response = await axios.request(options);
    res.render('result', { data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

router.post('/callback', (req, res) => {
  const artistId = req.body.artistId;

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/artists/',
    params: {
      ids: artistId,
    },
    headers: {
      'X-RapidAPI-Key': process.env.SPOTIFY_API_KEY,
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  // Using a callback with 'axios'
  axios.request(options, (error, response) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error');
    } else {
      res.render('result', { data: response.data });
    }
  });
});

module.exports = router;
module.exports = router;