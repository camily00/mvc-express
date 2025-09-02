const autores = require('../models/autores');

const autorController = {
  listar: async (req, res) => {
    const todosAutores = await autores.findAll();
    res.render('autores/listar', { autores: todosAutores });
  },
  criar: async (req, res) => {
    res.render('autores/criar');
  },
  inserir: async (req, res) => {
    const novoAutor = {
      nome: req.body.nome,
      nascimento: req.body.nascimento,
      genero: req.body.genero
    };
    await autores.create(novoAutor);
    res.redirect('/autores');
  },
  editar: async (req, res) => {
    const autorId = req.params.id;
    const autor = await autores.findByPk(autorId);
    res.render('autores/editar', { autor });
  },
  
  atualizar: async (req, res) => {
    const autorId = req.params.id;
    const autorAtualizado = {
      nome: req.body.nome,
      nascimento: req.body.nascimento,
      genero: req.body.genero
    };
    await autores.update(autorAtualizado, {
      where: { id: autorId }
    });
    res.redirect('/autores');
  }
};

module.exports = autorController;