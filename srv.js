require("dotenv").config();
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(process.env.API_KEY); //your API key from serpapi.com
//41876798f6cc9926a2ce8e7b8185f9ae8b13d2d6

const params = {
  engine: "google_finance_markets", // search engine
  trend: "indexes", // parameter is used for retrieving different market trends
  hl: "en", // parameter defines the language to use for the Google search
};

const getJson = () => {
  return new Promise((resolve) => {
    search.json(params, resolve);
  });
};

exports.getResults = async () => {
  const json = await getJson();
  delete json.search_metadata;
  delete json.search_parameters;
  return json;
};