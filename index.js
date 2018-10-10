const server = require('./server');

const for_heroku_port = process.env.PORT;
let port = for_heroku_port;

let sidNumber = 327;
let url = 'https://www.kunsan.ac.kr/dormi/index.kunsan?contentsSid=' + sidNumber;

server.start(port,url);