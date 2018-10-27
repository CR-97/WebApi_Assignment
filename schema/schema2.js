const mongoose = require('mongoose');

const news = mongoose.Schema({
  title:{
    type: String
  },

  desc:{
    type: String
  },

  imageUrl:{
    type: String
  },

  url:{
    type: String
  },
});

const News  = mongoose.model('News', news, "Saved_News");
module.exports = News;