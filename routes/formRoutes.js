const express = require('express');
const router = express.Router();
const FormData = require('../models/formData');

router.post('/submit', (req, res) => {
  console.log('Received POST request at /api/submit');
  console.log('Received data:', req.body);

  const formData = new FormData({
    "WHO ARE YOUR CUSTOMERS?": req.body['WHO ARE YOUR CUSTOMERS?'],
    "ARE THERE ANY SPECIAL REQUIREMENTS LIKE TECHNOLOGY, LOCATION, ETC?": req.body['ARE THERE ANY SPECIAL REQUIREMENTS LIKE TECHNOLOGY, LOCATION, ETC?'],
    "WHAT TYPES OF CUSTOMERS SHOULD BE EXCLUDED?": req.body['WHAT TYPES OF CUSTOMERS SHOULD BE EXCLUDED?'],
    "WHAT ARE THE POSITIONS OF YOUR PROSPECTS?": req.body['WHAT ARE THE POSITIONS OF YOUR PROSPECTS?'],
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