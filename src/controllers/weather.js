const axios = require('axios');
const logger = require('../utils/logger');

const getOneCall = async (req, res) => {
  const { lon, lat } = req.query;
  const base = 'https://api.openweathermap.org/data/2.5/onecall?';
  const units = 'metric';
  const exclude = 'minutely';
  const API = process.env.WEATHER_API_KEY;
  const url = `${base}lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API}&units=${units}`;

  const { status, data } = await axios.get(url);
  logger.debug(status);
  return res.json(data);
};

module.exports = { getOneCall };
