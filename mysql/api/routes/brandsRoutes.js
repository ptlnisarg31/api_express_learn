const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

// Define API routes
router.get('/brands', brandController.getBrandByID);

module.exports = router;
