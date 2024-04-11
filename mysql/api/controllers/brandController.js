const Brand = require('../models/brandModel');

const brandController = {
  getBrandByID: (req, res) => {
    const brand_id = req.query.brand_id;

    // Check if brand_id is provided
    if (!brand_id) {
      return res.status(400).json({ error: 'Brand ID not provided' });
    }

    Brand.getByID(brand_id, (err, brand) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      // Check if any data is found
      if (!brand) {
        return res.status(404).json({ error: 'Brand not found' });
      }

      // Send the response
      res.json(brand);
    });
  }
};

module.exports = brandController;
