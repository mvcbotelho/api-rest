import * as http from 'http'

const server = http.createServer();

server.listen(3000, () => console.log('Servidor Rodando na porta 3000'));