const Product = require ('../entities/Product')

class CreateProductUseCase {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(productData) {
    const product = new Product(
      null,
      productoData.nombre,
      productoData.descripcion,
      productoData.precio
    );

    return this.productsRepository.create(product);
  }
}

module.exports = CreateProductUseCase;
