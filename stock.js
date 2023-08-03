const yahooFinance = require('yahoo-finance');

const symbol = 'GOOG'; //AAPL'; // Replace 'AAPL' with the symbol of the stock you want to fetch.

yahooFinance.quote({
  symbol: symbol,
  modules: ['price', 'summaryDetail'],
}, function (err, quotes) {
  if (err) {
    console.error('Error fetching stock data:', err);
    return;
  }

  const quote = quotes[symbol];
  console.log('Stock Symbol:', quote.symbol);
  console.log('Current Price:', quote.price.regularMarketPrice.raw);
  console.log('Previous Close Price:', quote.summaryDetail.previousClose.raw);
  console.log('Market Cap:', quote.summaryDetail.marketCap.raw);
});
