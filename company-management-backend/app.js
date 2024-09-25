// /app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/company.routes');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/empresas');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', companyRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
