const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

// ⚠️ VULNERABILIDAD 1: Code Injection (For CodeQL Demo)
app.post('/calcular', (req, res) => {
  const formula = req.body.formula;
  // This is a dummy eval specifically for the Final Project screenshot
  const resultado = eval(formula);   
  res.json({ resultado });
});

// ⚠️ VULNERABILIDAD 2: Path Traversal (For CodeQL Demo)
app.get('/archivo', (req, res) => {
  const nombre = req.query.nombre;
  // This path.join with raw user input causes a CodeQL alert
  const ruta   = path.join('/archivos', nombre);
  res.sendFile(ruta);
});

module.exports = app;
