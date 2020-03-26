const express = require('express');

const app = express(); // Variavel armazena aplicação;

app.use(express.json());

app.listen(3333) // mando a aplicação a ouvir a porta 3333

app.get('/', (request, response) => {
    return response.json({
        aluno: "Fernando Henrique"
    });
})