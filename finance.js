const axios = require('axios');
require('dotenv').config();

const symbol = 'SQ'; // Replace 'AAPL' with the symbol of the stock you want to fetch.

const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    const data = response.data['Global Quote'];
    console.log(data);
    console.log('Stock Symbol:', data['01. symbol']);
    console.log('Current Price:', data['05. price']);
    console.log('Previous Close Price:', data['08. previous close']);
    console.log('Market Cap:', data['06. volume']);
  })
  .catch(error => {
    console.error('Error fetching stock data:', error.message);
  });
