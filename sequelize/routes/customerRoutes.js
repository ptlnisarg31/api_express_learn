const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Routes for customers
router.get('/', customerController.getAllCustomers);

module.exports = router;
