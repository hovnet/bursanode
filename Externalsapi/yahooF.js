const axios = require('axios');
require('dotenv').config();
const request = require('request');
const yahooFinance = require('yahoo-finance');



class YahooF {
    constructor(Fsymbol) {this.Fsymbol=Fsymbol;}

    RunApiAll = async () => {

        const symbol = this.Fsymbol;

    const rep = await yahooFinance.historical({
          symbol: symbol,
          from: '2022-01-01',
          to: '2023-08-01',
        }, (err, quotes) => {
          if (err) {
            console.error(err);
          } else {
            // console.log(quotes[0]['open']);
            // return 'arik'; //quotes[0]['open'];
          }
        });
        return rep;
      }

        // const options = {
        //   method: 'GET',
        //   // url: 'https://yahoo-finance-historical-stock-prices1.p.rapidapi.com/GetHistoricalPrices',
        //   url: 'https://yahoo-finance-historical-stock-prices1.p.rapidapi.com/GetHistoricalPrices',
        //   params: {symbol: 'AAPL'},
        //   // headers: {
        //   //   'X-RapidAPI-Key': '91bf546115msh53433074aa2a5ffp144375jsn4b2fc7b6b16c',
        //   //   'X-RapidAPI-Host': 'yahoo-finance-historical-stock-prices1.p.rapidapi.com'
        //   // }
        // };
        
        // try {
        //   axios.request(options).then(response => {
        //     var dataFromResponse = response.data;
        //     console.log(dataFromResponse);
        //     return response.data;
        //     }).catch(error => {
        //     console.error(error);
        //     });
        //   }
        // }
}
      
module.exports = YahooF;




      // const symbol = this.Fsymbol;  //'AAPL'; // Replace with the desired stock symbol
      // await yahooFinance.quote({
      // // await yahooFinance.quote({
      //   symbol: this.Fsymbol,
      //   modules: ['price', 'summaryDetail', 'earnings', 'calendarEvents', 'upgradeDowngradeHistory'] // Add more modules if needed
      // })
      //   .then(quote => {
      //     console.log(quote);
      //     return quote;

      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });

              //   const response = await axios.request(options);
        //   console.log(response.data);
        //   return response.data;

        // } catch (error) {
        //   console.error(error);
        // }

        // const symbol = this.Fsymbol; //'AAPL'; // Example: Apple Inc. stock symbol
        // const interval = '1d'; // Example: '1d' for daily data, '1wk' for weekly, '1mo' for monthly
        // const range = '1y'; // Example: '1y' for 1-year data, '5y' for 5-year, 'max' for all available data

        // const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=${interval}&range=${range}`;
        // var ar;
        // axios.get(apiUrl)
        //     .then(response =>  {
        //     const data = response.data;
        //     ar = response.data;

        //     // Process the data here
        //     console.log(data);
        // })
        //     .catch((error) => {
        //       console.error('Error fetching data:', error);
        //     });
        //     return ar;
