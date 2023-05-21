class GetProductListUseCase {
    constructor(productsRepository) {
      this.productsRepository = productsRepository;
    }
  
    async execute() {
      return this.productsRepository.getAll();
    }
}

module.exports = GetProductListUseCase;