const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    genero: {
        type: String
    },
    integrantes: [{
        type: String
    }],
    albums: [{
        type: String
    }],
    lanzamiento: {
        type: Date
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

const Artista = mongoose.model('Artista', artistaSchema);
module.exports = Artista;