var express = require('express');
var router = express.Router();

var Modelo = require('../models/codigo');

router.get('/', function(req,res,next){
  Modelo.find({},function(err1, data){
      if(err1)
          console.log(err1);
      res.json(data);
  });
});

router.post('/',function(req,res,next){
    Modelo.create(req.body,function(err1,data){
    if(err1)
        console.log(err1);
    res.json(data);
  });
});

router.put('/:id',function(req,res,next){
    var id= req.params.id;
    Modelo.findById(id,function(err, data){
      if(err)
        console.log(err);
      data.nombre= req.body.nombre;
      data.descripcion= req.body.descripcion;
      Modelo.update(id,data,function(err1,newdata){
        if(err1)
            console.log(err1);
        res.json(newdata);
      });
    });
});

router.delete('/:id',function(req, res,next){
  var id= req.params.id;
    Modelo.findByIdAndRemove(id,function(err,data){
      if(err)
        console.log(err);
        res.json(data);
    });
});
module.exports = router;
