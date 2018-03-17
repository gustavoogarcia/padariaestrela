const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const Banners = require('../api/padariaestrela/bannersService')
    Banners.register(router, '/banners')

    const Products = require('../api/padariaestrela/productsService')
    Products.register(router, '/products')
}