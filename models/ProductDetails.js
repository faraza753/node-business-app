// models/ProductDetails.js

const mongoose = require('mongoose');

const productDetailsSchema = new mongoose.Schema({
  productTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' },
  productName: { type: String, required: true },
  productSize: String,
  productColor: String,
  brandId: { type: mongoose.Schema.Types.ObjectId, ref: 'BrandName' },
  isActive: { type: Boolean, default: true },
  createDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProductDetails', productDetailsSchema);
