var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Promo = new schema ({

  id : {type: Number, unique : true},
  titulo : String,
  descripcion : String
});

var Promos  = mongoose.model("Promos", Promo);
module.exports = Promos;
