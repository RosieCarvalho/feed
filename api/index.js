const restify = require('restify');
const erros = require('restify-errors');
const avisos = require('./avisos');
//nodemon index.js
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  preflightMaxAge: 5, //Optional
  origins: ['http://localhost:8100', 'http://localhost:8200'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'feeddb'
  }
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

//https://codepunk.io/using-cors-with-restify-in-nodejs/

/* ###############rotas REST FEEDS ############################*/
server.get('/feeds', (req, res, next) => {
  knex('feeds')
    .leftJoin('usuarios', 'feeds.usuarios_id', '=', 'usuarios.id')
    .options({ nestTables: true })
    .then(dados => {
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

server.get('/parceiros/filter/:id', (req, res, next) => {
  const { id } = req.params;
  knex('parceiros')
    .leftJoin('categorias', 'parceiros.categorias_id', '=', 'categorias.id')
    .where('parceiros.id', id)
    .options({ nestTables: true })
    .then(dados => {
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

/* ###############rotas REST Categorias ############################*/
server.get('/categorias', (req, res, next) => {
  knex('categorias').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/categoria/create', (req, res, next) => {
  knex('categorias')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/categoria/view/:id', (req, res, next) => {
  const { id } = req.params;

  knex('categorias')
    .where('id', id)
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum feed encontrado'));
      res.send(dados);
    }, next);
});

server.put('/categoria/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('categorias')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/categorias/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('categorias')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});

/* ###############rotas REST Usuarios ############################*/
server.get('/usuarios', (req, res, next) => {
  knex('usuarios').then(dados => {
    res.send(dados);
  }, next);
});

server.post('/usuario/create', (req, res, next) => {
  knex('usuarios')
    .insert(req.body)
    .then(dados => {
      res.send(dados);
    }, next);
});

server.get('/usuario/login/:nome/:senha', (req, res, next) => {
  const nome = req.params.nome;
  const senha = req.params.senha;

  knex('usuarios')
    .where({
      nome: nome,
      senha: senha
    })
    .first()
    .then(dados => {
      if (!dados)
        return res.send(new erros.BadRequestError('nenhum usuario encontrado'));
      res.send(dados);
    }, next);
});

server.put('/usuarios/update/:id', (req, res, next) => {
  const { id } = req.params;

  knex('usuarios')
    .where('id', id)
    .update(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados atualizados');
    }, next);
});

server.del('/usuarios/delete/:id', (req, res, next) => {
  const { id } = req.params;

  knex('usuarios')
    .where('id', id)
    .delete(req.body)
    .then(dados => {
      if (!dados) return res.send(new erros.BadRequestError('erro'));
      res.send('dados excluidos');
    }, next);
});
