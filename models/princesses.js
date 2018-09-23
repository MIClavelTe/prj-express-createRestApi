var mongoose = require('mongoose')

var PrincessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

var Princess = mongoose.model('Princess', PrincessSchema)
module.exports = Princess