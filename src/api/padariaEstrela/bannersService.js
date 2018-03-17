const BannersSchema = require('./banners')
const errorHandler = require('../common/errorHandler')

BannersSchema.methods(['get', 'post', 'put', 'delete'])
BannersSchema.updateOptions({ new: true, runValidators: true })
BannersSchema.after('post', errorHandler).after('put', errorHandler)

module.exports = BannersSchema
