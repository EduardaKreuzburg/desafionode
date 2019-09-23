var express = require('express');
var app = express();

app.get('*', (req, res, next) => {
    if (req.headers['x-forwarded-proto'] != 'https') {
        
// checa se o header é HTTP ou HTTPS

        res.redirect("https://" + req.headers.host + req.url);
        
// faz o redirect para HTTPS

    } else {
        next();
        
// segue com a sequência das rotas

    }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('porta 3000!');
});

