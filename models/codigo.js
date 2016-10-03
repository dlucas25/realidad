var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Codigo = new schema ({

  id : {type: Number, unique : true},
  nombre : String,
  descripcion : String
});

var Qr = mongoose.model("Qr", Codigo);
module.exports = Qr;
