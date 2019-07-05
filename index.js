const { app, PORT } = require('./server');

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));