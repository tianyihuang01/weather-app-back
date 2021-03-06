const axios = require('axios');
const logger = require('../utils/logger');

const getEverything = async (req, res) => {
  const { q, pageSize } = req.query;
  const base = 'https://newsapi.org/v2/everything?';

  const config = {
    headers: { Authorization: `Bearer ${process.env.NEWS_API_KEY}` },
  };

  const url = `${base}q=${q}&pageSize=${pageSize}`;

  const { status, data } = await axios.get(url, config);
  logger.debug(status);
  return res.json(data);
};

module.exports = { getEverything };
