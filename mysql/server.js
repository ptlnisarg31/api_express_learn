const express = require('express');
const cors = require('cors');
const brandsRoutes = require('./api/routes/brandsRoutes');

const app = express();

// Set up CORS middleware
app.use(cors());

// Use API routes
app.use('/api', brandsRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
