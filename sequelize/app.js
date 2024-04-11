const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./config/database'); // Import Sequelize instance
const brandRoutes = require('./routes/brandRoutes'); // Import brand routes

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/brands', brandRoutes); // Use brand routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
