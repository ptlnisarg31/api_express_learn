const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('customers', {
  customerNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactLastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactFirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addressLine1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  addressLine2: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING
  },
  postalCode: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salesRepEmployeeNumber: {
    type: DataTypes.INTEGER
  },
  creditLimit: {
    type: DataTypes.DECIMAL(10, 2)
}
}, {
  timestamps: false // Disable Sequelize timestamps
});

module.exports = Customer;
