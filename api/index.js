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
    database: 'feeddb'
  }
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

/* ###############rotas REST FEEDS ############################*/
server.get('/feeds', (req, res, next) => {
  knex('feeds').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/feed/create', (req, res, next) => {
  knex('feeds')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/feed/view/:id', (req, res, next) => {
  const { id } = req.params;

  knex('feeds')
    .where('id', id)
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum feed encontrado'));
      res.send(dados);
    }, next);
});

server.put('/feed/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('feeds')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/feed/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('feeds')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});

/* ###############rotas REST AVISOS ############################*/
server.get('/avisos', (req, res, next) => {
  knex('avisos').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/avisos/create', (req, res, next) => {
  knex('avisos')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/avisos/view/:id', (req, res, next) => {
  const { id } = req.params;

  knex('avisos')
    .where('id', id)
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum feed encontrado'));
      res.send(dados);
    }, next);
});

server.put('/avisos/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('avisos')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/aviso/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('avisos')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});

/* ###############rotas REST PARCEIROS ############################*/
server.get('/parceiros', (req, res, next) => {
  knex('parceiros').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/parceiro/create', (req, res, next) => {
  knex('parceiros')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/parceiro/view/:id', (req, res, next) => {
  const { id } = req.params;

  knex('parceiros')
    .where('id', id)
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum feed encontrado'));
      res.send(dados);
    }, next);
});

server.put('/parceiro/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('parceiros')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/parceiro/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('parceiros')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});

/* ###############rotas REST BENEFICIOS ############################*/
server.get('/beneficios', (req, res, next) => {
  knex('beneficios').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/beneficio/create', (req, res, next) => {
  knex('beneficios')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/beneficio/view/:id', (req, res, next) => {
  const { id } = req.params;

  knex('beneficios')
    .where('id', id)
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum feed encontrado'));
      res.send(dados);
    }, next);
});

server.put('/beneficio/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('beneficios')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/beneficio/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('beneficios')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});
