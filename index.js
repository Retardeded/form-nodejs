const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Enable CORS for all routes or specify allowed origins
app.use(cors());

// Middleware
app.use(express.json());

app.use('/api', formRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});