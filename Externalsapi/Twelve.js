const axios = require('axios');
require('dotenv').config();

const symbol = 'AAPL'; // Replace 'AAPL' with the symbol of the stock you want to fetch.

const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
const apiUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;


class Mail {
    constructor(
      // rec,
      // actProp,
      res
          ) {
              // this.rec=rec;
              // this.actProp=actProp;
              this.res=res;
          }

RunApi = async () => {
    const options = {
        method: 'GET',
        url: 'https://yh-finance-complete.p.rapidapi.com/yhfhistorical',
        params: {
          ticker: 'NASDAQ',
          sdate: '2023-7-1',
          edate: '2023-7-30'
        },
        headers: {
          'X-RapidAPI-Key': '91bf546115msh53433074aa2a5ffp144375jsn4b2fc7b6b16c',
          'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
        }
      };

    // const options = {
    //     method: 'GET',
    //     url: 'https://random-words5.p.rapidapi.com/getRandom',
    //     headers: {
    //       'X-RapidAPI-Key': '91bf546115msh53433074aa2a5ffp144375jsn4b2fc7b6b16c',
    //       'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    //     }
    //   };

    // const options = {
    //     method: 'GET',
    //     url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    //     params: {count: '5'},
    //     headers: {
    //       'X-RapidAPI-Key': '91bf546115msh53433074aa2a5ffp144375jsn4b2fc7b6b16c',
    //       'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'        
    //     }
    //   };

      
    // const options = {
    //     method: 'GET',
    //     url: 'https://random-words5.p.rapidapi.com/getRandom',
    //     headers: {
    //       'X-RapidAPI-Key': '91bf546115msh53433074aa2a5ffp144375jsn4b2fc7b6b16c',
    //       'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    //     }
    //   };      
      try {
          const response = await axios.request(options);
          this.res = response.data;
          console.log(response.data);
          return
      } catch (error) {
          console.error(error);
          return
      }    
}
}
      
module.exports = Mail;
