const Brand = require('../models/Brand');

// Get all brands
exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.findAll();
    res.status(200).json(brands);
  } catch (error) {
    console.error('Error retrieving brands:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get brand by ID
exports.getBrandById = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    res.status(200).json(brand);
  } catch (error) {
    console.error('Error retrieving brand by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
