const Customer = require('../models/Customer');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (err) {
    console.error('Error retrieving customers:', err);
    res.status(500).json({ err: 'Server error' });
  }
};
