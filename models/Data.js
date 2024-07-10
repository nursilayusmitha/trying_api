const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    minlength: 3, // Minimum length validation
    maxlength: 50 // Maximum length validation
  },
  alamat: {
    type: String,
    required: true,
    minlength: 5, // Minimum length validation
    maxlength: 100 // Maximum length validation
  },
  no_telp: {
    type: String,
    required: true,
    minlength: 10, // Minimum length validation
    maxlength: 15 // Maximum length validation
  },
});

module.exports = mongoose.model('Data', DataSchema);
