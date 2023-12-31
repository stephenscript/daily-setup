// set up environmental variables
const dotenv = require('dotenv');
dotenv.config();

const axios = require("axios");

// set up credentials
const BASE_URL = "https://api.daily.co/v1/";
const API_AUTH = process.env.DAILY_API_KEY;

// create client
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Authorization: `Bearer ${API_AUTH}` }
});

const apiHelper = async (method, endpoint, body = {}) => {
  try {
    const response = await api.request({
      url: endpoint,
      method: method,
      data: body
    });
    return response.data;
  } catch (error) {
    console.log("Status: ", error.response.status);
    console.log("Text: ", error.response.statusText);
    // need to throw again so error is caught
    // a possible improvement here is to pass the status code back so it can be returned to the user 
    throw new Error(error);
  }
};

module.exports = apiHelper;