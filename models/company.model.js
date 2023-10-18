const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  working_fields: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: String,
}, { toJSON: { virtuals: true } });

const companyModel = mongoose.model('Company', companySchema);

module.exports = companyModel;
