const axios = require('axios');
require('dotenv').config();
const request = require('request');

class Mail {
    constructor(symbol
      ) {
          this.symbol=symbol;
      }

      RunApiCurr = async () => {
        const apiKey = process.env.FINANCE_API_KEY;
        const symbol = this.symbol;
        const FunctionFinance = ["GLOBAL_QUOTE","TIME_SERIES_DAILY","TIME_SERIES_WEEKLY","TIME_SERIES_MONTHLY","SYMBOL_SEARCH"];
        // const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
        const url = `https://www.alphavantage.co/query?function=${FunctionFinance[0]}&symbol=${symbol}&apikey=${apiKey}`;
        var ar;
        await axios.get(url)
          .then(response => {
            ar = response.data;
              {console.log(ar);
              }
            })
          .catch(error => console.error('Error:', error));
          return ar;
        }
      
        RunApiAll = async () => {
          const apiKey = process.env.FINANCE_API_KEY;
          const symbol = this.symbol;
          const FunctionFinance = ["GLOBAL_QUOTE","TIME_SERIES_DAILY","TIME_SERIES_WEEKLY","TIME_SERIES_MONTHLY","SYMBOL_SEARCH"];
          // const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
          const url = `https://www.alphavantage.co/query?function=${FunctionFinance[2]}&symbol=${symbol}&apikey=${apiKey}`;
          var ar;
          await axios.get(url)
            .then(response => {
              ar = response.data;
                {console.log(ar);
                }
              })
            .catch(error => console.error('Error:', error));
            return ar;
          }
        
                
}
      
module.exports = Mail;
// const symbol = 'AAPL'; // Replace 'AAPL' with the symbol of the stock you want to fetch.

// const apiKey = process.env.FINANCE_API_KEY;
// const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  // let FunctionDIGITALCURRENCYMONTHLY = `DIGITAL_CURRENCY_MONTHLY`;
  // const FunctionGLOBALQUOTE = `GLOBAL_QUOTE`;
  // const TSymbol = this.symbol;
// let apiUrl = `https://www.alphavantage.co/query?function=${FunctionGLOBALQUOTE}&symbol=${Tsymbol}&apikey=${apiKey}`;
// await axios.get(apiUrl)
//   .then(response => {
//     const data = response.data['Global Quote'];
//     console.log('Stock Symbol:', data['01. symbol']);
//     console.log('Current Price:', data['05. price']);
//     console.log('Previous Close Price:', data['08. previous close']);
//     console.log('Market Cap:', data['06. volume']);
//     return data
//   })
//   .catch(error => {
//     console.error('Error fetching stock data:', error.message);
//     return
//   });
