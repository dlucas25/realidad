var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo = new schema ({

  id : {type: Number, unique : true},
  nombre : String,
  apellido_p : String,
  apellido_m : String,
  telefono : Number,
  mail : String,
  contraseña : String
});

var Usuario = mongoose.model("usuario", Modelo);
module.exports = Usuario;
