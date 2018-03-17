const restful = require('node-restful')
const mongoose = restful.mongoose

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageURL: [{ type: String, required: true }],
    featured: { type: Boolean, default: false },
    flavors: [{ type: String }]
})

module.exports = restful.model('products', productsSchema)