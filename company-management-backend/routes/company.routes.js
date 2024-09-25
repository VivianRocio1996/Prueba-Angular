// /routes/company.routes.js
const express = require('express');
const router = express.Router();
const Company = require('../models/company');

// Crear una empresa
router.post('/companies', async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtener todas las empresas
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Actualizar una empresa por ID
router.put('/companies/:id', async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar una empresa por ID
router.delete('/companies/:id', async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
