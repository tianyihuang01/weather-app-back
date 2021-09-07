const City = require('../models/city');

const getAllCities = async (req, res) => {
  const cities = await City.find().exec();
  if (!cities) return res.sendStatus(404);
  return res.json(cities);
};

const getCityByObjectId = async (req, res) => {
  const { id } = req.params;
  const city = await City.findById(id).exec();
  if (!city) return res.sendStatus(404);
  return res.json(city);
};

const getCityByCityId = async (req, res) => {
  const { id } = req.params;
  const city = await City.findOne({ id }).exec();
  if (!city) return res.sendStatus(404);
  return res.json(city);
};

const getCityByField = async (req, res) => {
  const { name } = req.query;
  const cities = await City.find({ name: new RegExp(name, 'i') })
    .limit(20)
    .exec();
  if (!cities) return res.sendStatus(404);
  return res.json(cities);
};

module.exports = { getAllCities, getCityByObjectId, getCityByCityId, getCityByField };
