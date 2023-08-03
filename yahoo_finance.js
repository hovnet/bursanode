const yahooFinance = require('yahoo-finance-api');

const symbol = 'AAPL'; // Replace 'AAPL' with the symbol of the stock you want to fetch.

yahooFinance.quote({
  symbol: symbol,
  modules: ['price', 'summaryDetail'],
})
  .then(quote => {
    console.log('Stock Symbol:', quote.symbol);
    console.log('Current Price:', quote.price.regularMarketPrice.raw);
    console.log('Previous Close Price:', quote.summaryDetail.previousClose.raw);
    console.log('Market Cap:', quote.summaryDetail.marketCap.raw);
  })
  .catch(error => {
    console.error('Error fetching stock data:', error);
  });
