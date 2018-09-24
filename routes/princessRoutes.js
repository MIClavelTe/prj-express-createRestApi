var express = require('express')
var router = express.Router()
var Princess = require('../models/princesses')

router.get('/', function(req, res) {
    res.send('Get princess end point')
})

router.post('/', function(req, res) {
    // var princessData = {
    //     name: req.body.name
    // }
     
    // Princess.create(princessData, function(error, princess) {
    //     if (error) {
    //         res.send('Fill in the name')
    //     } else {
    //         res.send(`You have created ${princessData.name}`)
    //     }
    // })

    console.log(req.body)
    res.send('OK')
})



module.exports = router;