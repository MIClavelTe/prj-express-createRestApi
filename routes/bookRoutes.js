var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('Get book end point')
})

router.post('/', function(req, res) {
    // var name = req.body.name
    // var characterName = req.body.character_name
    // var gender = req.body.gender
    // var age = req.body.age
    // console.log(name)
    res.send('Post end point')
})



module.exports = router;