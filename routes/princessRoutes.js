var express = require('express')
var router = express.Router()
var Princess = require('../models/princesses')

router.get('/', function(req, res) {
    res.send('Get princess end point')
})

router.post('/', function(req, res) {
    var princessData = {
        name: req.body.name
    }
     
    Princess.create(princessData, function(error, princess) {
        if (error) {
            console.error("Error")
        } else {
            console.log(princessData.name)
        }
    })
})



module.exports = router;