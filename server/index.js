const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const Artista = require('../models/Artista');

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

/*
  CRUD Artista
*/

// Create
app.post('/api/v1/artista', (req, res) => {
  const artista = req.body
  const nuevoArtista = new Artista(artista);
        nuevoArtista.save( (err) => {
          return err
          ? res.status(400).send({ 'mensaje': 'hubo un error', 'respuesta': err })
          : res.status(201).send({ 'mensaje':'ok', 'respuesta': nuevoArtista });
        });
});

// Read (All)
app.get('/api/v1/artista', (req, res) => {
  Artista.find().exec()
    .then( artistas => res.status(200).send(artistas) )
    .catch( err => res.status(400).send(err));
});

// Read (One)
app.get('/api/v1/artista/:id', (req, res) => {
  const { id } = req.params;
  Artista.findById(id).exec()
    .then( artista => res.status(200).send(artista) )
    .catch( err => res.status(400).send(err));
});

// Update
app.patch('/api/v1/artista/:id', (req, res) => {
  const { id } = req.params;
  Artista.findByIdAndUpdate(id, req.body, { new: true }).exec()
    .then( artista => res.status(200).send(artista) )
    .catch( err => res.status(400).send(err));
});

// Delete
app.delete('/api/v1/artista/:id', (req, res) => {
  const { id } = req.params;
  Artista.findByIdAndDelete(id).exec()
    .then( artista => res.status(204).send(artista) )
    .catch( err => res.status(400).send(err));
});

module.exports = { app, PORT };