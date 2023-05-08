class ProductsController {

    constructor(getProductListUseCase, createProductUseCase) {
      this.getProductListUseCase = getProductListUseCase;
      this.createProductUseCase = createProductUseCase;
    }
  
    async getAll(req, res, next) {
      try {
        const products = await this.getProductListUseCase.execute();
        res.json(products);
      } catch (error) {
        next(error);
      }
    }
  
    async create(req, res, next) {
      try {
        const productData = req.body;
        const product = await this.createProductUseCase.execute(productData);
        res.status(201).json(product);
      } catch (error) {
        next(error);
      }
    }
}

module.exports = ProductsController;