const express = require('express');

const ProductsService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getProductSchema } = require('../schemas/products.schema');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
});

router.get(
  '/:id',
  // in case we have other param types, we can add the validation handle here
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOneById(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
