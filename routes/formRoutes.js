const express = require('express');
const router = express.Router();
const FormData = require('../models/formData');
const questionNames = require('../models/questionNames'); 

router.post('/submit', (req, res) => {
  console.log('Received POST request at /api/submit');
  console.log('Received data:', req.body);

  const formData = new FormData({
    [questionNames.CUSTOMERS]: req.body[questionNames.CUSTOMERS],
    [questionNames.SPECIAL_REQUIREMENTS]: req.body[questionNames.SPECIAL_REQUIREMENTS],
    [questionNames.CUSTOMERS_EXCLUDED]: req.body[questionNames.CUSTOMERS_EXCLUDED],
    [questionNames.POSITIONS]: req.body[questionNames.POSITIONS],
  });

  formData.save()
    .then(() => {
      console.log('Data saved successfully');
      res.status(200).json({ message: 'Data saved successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Error saving data to MongoDB' });
    });
});

module.exports = router;