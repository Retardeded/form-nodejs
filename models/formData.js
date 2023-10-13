const mongoose = require('mongoose');
const questionNames = require('./questionNames'); 

const formDataSchema = new mongoose.Schema({
  [questionNames.CUSTOMERS]: String,
  [questionNames.SPECIAL_REQUIREMENTS]: String,
  [questionNames.CUSTOMERS_EXCLUDED]: String,
  [questionNames.POSITIONS]: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;