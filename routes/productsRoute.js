const express = require('express')
const router = express.Router();
const ProductsController = require('../controllers/ProductsController')
const ProductsRepository  = require('../adapters/ProductsRepository')
const GetProductListUseCase  = require('../usecases/GetProductListUseCase')
const CreateProductUseCase  = require('../usecases/CreateProductUseCase')

const productsRepository = new ProductsRepository();
const getListProductUseCase = new GetProductListUseCase(productsRepository);
const createProductUseCase = new CreateProductUseCase(productsRepository);
const productsController = new ProductsController(getListProductUseCase, createProductUseCase);


router.get('/', productsController.getAll.bind(productsController));

router.get('/prueba', function(req, res) {
    res.send('Hola mundo')
})
router.post('/', productsController.create.bind(productsController));

module.exports = router;