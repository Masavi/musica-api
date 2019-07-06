const mongoose = require('mongoose');
const db_uri = 'mongodb+srv://maui:abc123def@testing-cluster-efwi5.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
    db_uri, 
    { useNewUrlParser: true },
    () => console.log(`conexión exitosa con bd 🐢`));
