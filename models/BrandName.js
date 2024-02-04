// models/BrandName.js

const mongoose = require('mongoose');

const brandNameSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BrandName', brandNameSchema);
