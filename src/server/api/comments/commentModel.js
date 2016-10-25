const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Comment = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  modified: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Comment', Comment);
