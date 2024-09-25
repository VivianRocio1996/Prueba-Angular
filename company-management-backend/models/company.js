// /models/company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  nombreComercial: { type: String, required: true },
  razonSocial: { type: String, required: true },
  telefono: { type: String, required: true },
  correoElectronico: { type: String, required: true },
  NIT: { type: String, required: true },
  estado: { type: String, required: true },
  direccion: { type: String, required: true }
});

module.exports = mongoose.model('Company', companySchema);
