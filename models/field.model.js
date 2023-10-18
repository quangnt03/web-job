const mongoose = require('mongoose');

const fieldSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

const fieldModel = mongoose.model('Field', fieldSchema);

module.exports = fieldModel;
