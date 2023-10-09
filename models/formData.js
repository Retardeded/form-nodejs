const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  "WHO ARE YOUR CUSTOMERS?": String,
  "ARE THERE ANY SPECIAL REQUIREMENTS LIKE TECHNOLOGY, LOCATION, ETC?": String,
  "WHAT TYPES OF CUSTOMERS SHOULD BE EXCLUDED?": String,
  "WHAT ARE THE POSITIONS OF YOUR PROSPECTS?": String,
});

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;