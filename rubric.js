const express = require('express');
const bodyParser = require('body-parser');
const myProjects = require('./project');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const HTTP_ERROR_STATUS = 500;

const PORT = '3000';

app.get('/my-projects', async function (_req, res) {
  const allProjects = await myProjects.findAll();
  if (allProjects) {
    return res.status(HTTP_OK_STATUS).send(allProjects);
  }
  res.status(404).send({MENSAGEM:"Não existem projetos cadastrados"});
});

app.get('/my-projects/search', async function (req, res) {
  if (Object.entries(req.query).length > 0) {
    const [term, value] = Object.entries(req.query)[0];
    if (term === undefined || value === undefined) {
      return res.status(HTTP_ERROR_STATUS).send({MENSAGEM:"Filtro não informado."});
    }
    const searchProjects = await myProjects.findByTerm(term,value);
    if (searchProjects) {
      return res.status(HTTP_OK_STATUS).send(searchProjects);
    }
  }
  res.status(HTTP_ERROR_STATUS).send({MENSAGEM:"Não existem projetos cadastrados para esse filtro ou não existe essa propriedade."});
});

app.get('/my-projects/:id', async function (req, res) {
  const oneProject = await myProjects.findById(parseInt(req.params.id, 10))
  if (oneProject) {
    return res.status(HTTP_OK_STATUS).send(oneProject);
  }
  res.status(404).send({MENSAGEM:"Projeto Não Encontrado"});
});

app.post('/my-projects', async function (req, res) {
  const addProject = await myProjects.addProject(req.body);
  if (addProject !== null) {
    return res.status(HTTP_OK_STATUS).send(addProject);
  }
  res.status(404).send({MENSAGEM:"Erro ao Cadastrar. Verifique os dados."});
});

app.put('/my-projects/:id', async function (req, res) {
  const editedProject = await myProjects.editProject({id: parseInt(req.params.id, 10), ...req.body});
  if (editedProject !== null) {
    return res.status(HTTP_OK_STATUS).send(editedProject);
  }
  res.status(HTTP_ERROR_STATUS).send({MENSAGEM:"Erro ao Alterar. Verifique os dados."});
});

app.delete('/my-projects/:id', async function (req, res) {
  const deletedProject = await myProjects.delProject(parseInt(req.params.id, 10));
  if (deletedProject !== null) {
    return res.status(HTTP_OK_STATUS).send(deletedProject);
  }
  res.status(HTTP_ERROR_STATUS).send({MENSAGEM:"Erro ao Excluir. Verifique os dados."});
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
});