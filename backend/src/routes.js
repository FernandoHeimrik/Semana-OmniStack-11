const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;
    
    console.log(body);
    
    return response.json({
        evento: "Semana OminiStack 11.0",
        aluno: "Fernando Henrique"
    });
});

module.exports = routes;