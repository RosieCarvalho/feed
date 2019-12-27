module.exports = {
  _avisos: function(server) {
    server.get('/avisos', (req, res, next) => {
      knex('avisos').then(dados => {
        res.send(dados);
      }, next);
    });
  },

  create: function() {
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
            return res.send(
              new erros.BadRequestError('nenhum feed encontrado')
            );
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
  }
};
