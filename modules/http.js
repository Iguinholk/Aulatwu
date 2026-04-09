const http = require('http') //SIM 

const porta = 8080; // SIM

const server = http.createServer((req, res) => { //Q VAI CRIAR SIM 
    if (req.url == '/home'){ //MANO TAVA ESCRITO ASSM NO VIDEO , KKK MINHA TELA TA DIVIDIDA, SIM
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end("<h1>Home Page");
    }

    if (req.url == '/users'){
        const users = [
            
        ]
    }
}) 

server.listen(porta, () => console.log(`Rodando na porta ${porta}!` )); // VAI 