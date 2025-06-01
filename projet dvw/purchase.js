// models/purchase.js
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  number: String,
  designation: String,
  quantity: Number,
  requester: String,
  verifier: String,
  approver: String,
  isIT: Boolean
});

module.exports = mongoose.model('Purchase', purchaseSchema);
