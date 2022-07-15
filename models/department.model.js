const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  // _id: { type: mongoose.Types.ObjectId, required: true }, // added automatically by MongoDB - always correct
  // name: { type: String, required: true }
  name: { 
    type: String, 
    required: true, 
    maxlength: 20, 
    minlength: 5, 
  }
});

module.exports = mongoose.model('Department', departmentSchema);