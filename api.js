var express = require("express"),
Bourne = require('bourne'),
bodyParser = require("body-parser"),
db = new Bourne('data.json'),
router = express.Router();

router
    .use(function(req,res,next){
        if(!req.user) req.user = {id:1};
        next();
     })
     .use(bodyParser.json())
     .route('/contact')
        .get(function(req, res){db.findAll({userId:parseInt(req.user.id, 10)}, function(err, data){
res.json(data);
        });
        })
        .post(function(req, res){
            var contact = req.body;
            contact.userId = req.user.id;
            db.insert(contact, function(err, data){
                res.json(data);
            })
        })