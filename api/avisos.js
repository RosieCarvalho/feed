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
