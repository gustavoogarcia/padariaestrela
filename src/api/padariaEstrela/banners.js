const restful = require('node-restful')
const mongoose = restful.mongoose

const bannersSchema = new mongoose.Schema({
    textFirstLine: { type: String, required: true },
    textSecondLine: { type: String, required: true },
    buttonLabel: { type: String, required: true },
    buttonURL: { type: String, required: true },
    imageURL: { type: String, required: true },
    status: { type: Boolean, default: true }
})

module.exports = restful.model('banners', bannersSchema)