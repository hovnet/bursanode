const express = require('express');
const app = express();
const nodemon = require('nodemon');
const cors = require('cors');
const finance = require('./Externalsapi/finance');
const MAIN3 = require('./Externalsapi/Twelve');
const MAIN = require('./Externalsapi/finance');
const MAIN1 = require('./Externalsapi/Polygon');
const MAINY = require('./Externalsapi/yahooF');
const axios = require('axios');
const yahooFinance = require('yahoo-finance');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/', cors(), async (req, res) => {

  ar = {name:'Arik Levi'};
  await res.send(ar);
});

app.get('/CurrentProp', cors(), async (req, res) => {
  main = new MAIN();
  main.symbol = req.query['stock'];
  const resultGenric = await main.RunApiCurr(); 
  res.send(resultGenric);
});

app.get('/AllProps', cors(), async (req, res) => {
  main1 = new MAIN();
  main1.symbol = req.query['stock'];
  const resultGenric1 = await main1.RunApiAll(); 
  // res.send(resultGenric1['Monthly Time Series:']);
  res.send(resultGenric1);
});

app.get('/yahoo', cors(), async (req, res) => {
  mainy = new MAINY();
  mainy.Fsymbol = req.query['stock'];
  const resultGenricY = await mainy.RunApiAll(); 
  // console.log('resultGenricY-->',resultGenricY);
  // res.send(resultGenric1['Monthly Time Series:']);
  res.send(resultGenricY);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});