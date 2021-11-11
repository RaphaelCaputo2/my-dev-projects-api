# Meus Projetos API

#### Api desenvolvida para manter a lista de projetos desenvolvidos durante o curso atualizada.
---

## Tecnologias:
- Node JS
- Express
---

## Execução:
- Antes de executar, instalar as dependências:
```
   $ npm install
``` 
- Para rodar o projeto, executar o script start:
```
   $ npm start
``` 

## Persistência dos Dados:
- Os dados são persistidos em arquivo no formato JSON de nome my-projects.json
- Existe um arquivo projects.js com as principais funções para manipulação dos dados no arquivo (adicionar, editar, remover, consultar). 
- Formato do objeto com as informações de um projeto: 
``` JSON
    {
        "id": 1,
        "modulo": "1",
        "bloco": "1",
        "nome": "Projeto X",
        "repositorio": "/projeto-1.1",
        "resultado": "80"
    }
``` 
## Rotas:
#### 1. Obtém a lista de projetos:
- GET /my-projects
- Retorna a lista de todos os projetos

#### 2. Obtém um projeto específico:
- GET /my-projects/:id
- Retorna o projeto com o identificador informado

#### 3. Adiciona um projeto:
- POST /my-projects
- Informa no body os dados do projeto
- Retorna os dados do projeto mais o identificador associado

#### 4. Substitui/Edita um projeto:
- PUT /my-projects/:id
- Informa no body os dados do projeto
- Retorna o projeto com os dados alterados

#### 5. Exclui um projeto:
- DELETE /my-projects/:id
- Retorna o projeto com os dados alterados

#### 6. Pesquisa por uma propriedade do projeto:
- GET /my-projects/search?propriedade=valor
- Retorna uma lista de projetos que sastifazem o filtro.