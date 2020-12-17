const mongoose = require('mongoose');

const MeasurementDataSchema = new mongoose.Schema({
  devid: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  co2value: {
    type: String,
    required: true
  },
  noofpeopleinroom: {
    type: String,
    required: true
  },
  lon: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  }
});

const MeasurementSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  data: [MeasurementDataSchema]
});

const MeasurementModel = mongoose.model('MeasurementModel', MeasurementSchema);

module.exports = { MeasurementModel };
