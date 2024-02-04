const { model } = require('mongoose');
const ProductDetails = require('../models/ProductDetails');
const BrandName = require('../models/BrandName');
const ProductType = require('../models/ProductType');




const getProducts = async (req, res, next) => {
    try {
      const products = await ProductDetails.find().populate('productTypeId brandId');
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // POST a new product
  const addProducts =  async (req, res, next) => {
    const { productTypeId, productName, productSize, productColor, brandId } = req.body;
  
    try {
      const productType = await ProductType.findById(productTypeId);
      const brand = await BrandName.findById(brandId);
  
      if (!productType || !brand) {
        return res.status(400).json({ message: 'Invalid product type or brand' });
      }
  
      const newProduct = new ProductDetails({
        productTypeId,
        productName,
        productSize,
        productColor,
        brandId
      });
  
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // PATCH an existing product
  const updateProduct = async (req, res, next) => {
    try {
      const productId = req.params.id; // Correct variable name
      const updatedProduct = await ProductDetails.findByIdAndUpdate(productId, {
        productTypeId: req.body.productTypeId,
        productName: req.body.productName,
        productSize: req.body.productSize,
        productColor: req.body.productColor,
        brandId: req.body.brandId
      }, { new: true, runValidators: true });
      
      if (!updatedProduct) { // Check if product with given ID is not found
        return res.status(404).json({ error: 'The product with the given id not found' });
      }
      
      res.json(updatedProduct);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  
  // DELETE an existing product
  const deleteProduct =  async (req, res, next) => {
    const { productId } = req.params;
  
    try {
      await ProductDetails.findByIdAndDelete(req.params.id);
      res.json({ message: 'Product deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  module.exports = {
    addProducts,
    getProducts,
    updateProduct,
    deleteProduct
}
