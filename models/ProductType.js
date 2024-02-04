// models/ProductType.js

const mongoose = require('mongoose');

const productTypeSchema = new mongoose.Schema({
  productType: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProductType', productTypeSchema);
