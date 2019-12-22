const restify = require('restify');
const erros = require('restify-errors');

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'feed'
  }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/echo/:name', function(req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

//rotas REST
server.get('/echo/:name', (req, res, next) => {
  knex('nometabela').then(dados => {
    res.send(dados);
  }, next);

  res.send(req.params);
  return next();
});
