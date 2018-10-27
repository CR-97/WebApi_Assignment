const mongoose = require('mongoose');

const comp = mongoose.Schema({
  comp_id:{
    type:String
  },
  comp_name:{
    type:String
  },
  comp_area:{
    type:String
  }
});

const Comp = mongoose.model('Comp',comp,'competitions');
module.exports = Comp;