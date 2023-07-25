const { restClient } = require('@polygon.io/client-js');
const rest = restClient(process.env.POLY_API_KEY);//process.env.ALPHA_VANTAGE_API_KEY;

class Poly {
    constructor(
      res
          ) {
              this.res=res;
          }

RunApi = async () => {

    rest.stocks.snapshotAllTickers().then((data) => {
        this.res = data;
        console.log(data);
        return
    }).catch(e => {
        console.error('An error happened:', e);
        return
    });
}
}
      
module.exports = Poly;
