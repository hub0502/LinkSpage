var express = require('express');
var router = express.Router();
var webtoons = require('../data.json');
router.get('/',function(req,res,next){
    res.send(webtoons);
});

router.get('/:id', function(req, res, next){
    var id = parseInt(req.params.id, 10);
    var webtoon = webtoons.filter(function (webtoon){
        return webtoon.id == id
    });
    res.send(webtoon);
})

module.exports = router;