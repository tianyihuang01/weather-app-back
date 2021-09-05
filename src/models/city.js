const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    state: { type: String },
    country: { type: String, uppercase: true },
    coord: { lon: { type: Number, required: true }, lat: { type: Number, required: true } },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

module.exports = model('City', schema);
