const ProductsSchema = require('./products')
const errorHandler = require('../common/errorHandler')

ProductsSchema.methods(['get', 'post', 'put', 'delete'])
ProductsSchema.updateOptions({ new: true, runValidators: true })
ProductsSchema.after('post', errorHandler).after('put', errorHandler)

module.exports = ProductsSchema