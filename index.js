const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');

const app = express();
const port = 3001;
const dbUrl = 'mongodb://127.0.0.1:27017/mongo-test';

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