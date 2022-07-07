const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    // db connection
    this.products = [];
  }

  async find() {
    if (this.products.length === 0) {
      throw boom.notFound('No products found');
    }
    return this.products;
  }

  async findOneById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw boom.notFound(`Product with id ${id} not found`);
    }
    return product;
  }
}

module.exports = ProductService;
