const livros = require('../models/livros');

const livrosController = {
  listar: async (req, res) => {
    const todosLivros = await livros.findAll();
    res.render('livros/listar', { livros: todosLivros });
  },
  criar: async (req, res) => {
    res.render('livros/criar');
  },
  inserir: async (req, res) => {
    const novoLivro = {
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano,
    };
    await livros.create(novoLivro);
    res.redirect('/livros');
  },
  editar: async (req, res) => {
    const livroId = req.params.id;
    const livro = await livros.findByPk(livroId);
    res.render('livros/editar', { livro });
  },
  
  atualizar: async (req, res) => {
    const livroId = req.params.id;
    const livroAtualizado = {
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano
    };
    await livros.update(livroAtualizado, {

    where:{ id:livroId }
    });
    res.redirect('/livros');
  }
};

module.exports = livrosController;
