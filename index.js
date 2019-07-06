require('dotenv').config();
const { app, PORT } = require('./server');
require('./database');

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));