const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  // _id: { type: mongoose.Types.ObjectId, required: true }, // added automatically by MongoDB - always correct
  name: { type: String, required: true }
});

module.exports = mongoose.model('Department', departmentSchema);