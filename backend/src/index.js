const express = require('express');
const routes = require('./routes');

const app = express(); // Variavel armazena aplicação;

app.use(express.json());
app.use(routes);

app.listen(3333) // mando a aplicação a ouvir a porta 3333

