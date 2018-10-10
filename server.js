const http = require('http');
const requestData = require('./requestData');
const write = require('./write');

function start(port,url){
    var onRequest = (req, res) =>{
        requestData.loadData(url,(text)=>{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            write.text(res,text,()=>{
                res.end();
            });
        });
    };
    http.createServer(onRequest).listen(port, ()=>{
        console.log('Listening to port: ' + port);
    });
}

module.exports = {
    start: start
};