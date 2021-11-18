var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  n3:{
      type: Number,
      required: true,
  },
  n4:{
    type: Number,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('post', postSchema);