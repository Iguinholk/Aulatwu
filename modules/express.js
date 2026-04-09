const express = require('express')

const app = express();

app.get("/home", (req, res) => {
    res.status(200).send("<h1> Hellor Word <h1>");
});

app.get("/users", (req, res) =>{
    const users = [
       {
        nome: "igor", 
        email: "00iguinho@gmail.com"
       }
    ]
    res.status(200).json(users);
})


const porta = 8080;

app.listen(porta, () => console.log(`Rodando com express na porta ${porta}!`));