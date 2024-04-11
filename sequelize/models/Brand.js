// Import required modules
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Brand model
const Brand = sequelize.define('brands', {
  brand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand_active: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  brand_status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false // Disable Sequelize timestamps
});

// Export the Brand model
module.exports = Brand;
