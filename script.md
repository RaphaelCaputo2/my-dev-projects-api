# Mentoria Técnica - Bug Hunter

### Quando aplicar:
- Essa mentoria foi elaborada para ser aplicada após a aula ao vivo do dia do conteúdo Express: HTTP com Node.js (Dia 4 do Bloco de Node JS - Projeto TalkManager)

### Tempo Sugerido: 50 min
- (10 min) Abertura e Explicação da Dinâmica
- (30 min) Aplicação da Dinâmica (divisão em grupos preferencialmente)
- (10 min) Revisão dos resultados*
    
    *Pode ser feito na mentoria, mas se o tempo não for suficiente, pode pedir para que as pessoas/grupos compartilhem as respostas na própria thread.

### Contexto:

Uma pessoa estudante da trybe, cursando o módulo de frontend, encarou o desafio de desenvolver uma API para guardar as informações dos seus projetos desenvolvidos durante o curso. Porém, por ainda não ter estudado Node JS, a API desenvolvida apresenta algumas falhas, e para conseguir solucionar essas falhas, sabendo que a turma XXX acabou de aprender este conteúdo, ela abriu uma thread no slack da turma compartilhando o link do repositório e solicitando ajuda. 

- Thread:
    - Título: [ AJUDA ] Peço ajuda para resolver alguns bugs na API que desenvolvi
    - Corpo: 
    
    Oi Trybers! Todos bem?
    Fiz uma API, mas ainda não estudei o Módulo de BackEnd, logo, além da dificuldade, não consegui resolver os bugs listados abaixo. Como vi que vocês acabaram de estudar APIs em Node, venho pedir uma ajuda para deixar minha API 100%, posso contar com vocês? 
    - [Adicionar link do repositório ] 
    
    Lista de erros:
    ```
    1. Ao executar a rota para listar todos os projetos, ela retorna a resposta correta, porém no terminal aparecer um erro: UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    2. A rota para obter um projeto pelo id está ok, porém, quando passo um identificador que não está cadastrado não tenho certeza se a API está retornando o código correto.
    3. Não está funcionando a rota de exclusão. É retornada a mensagem para verificar os dados.
    4. A rota de inclusão sempre me retorna a mesma mensagem: "Erro ao Cadastrar. Verifique os dados."
    5. A rota de edição está OK, mas gostaria de que validasse também.
    6. A rota de pesquisa sempre retorna a mensagem "Projeto Não Encontrado". Provavelmente não está funcionando, mas não identifiquei o erro. Testes: /my-projects/search?bloco=1, /my-projects/search?modulo=1, /my-projects/search?resultado=100
    7. Aproveita para me indicar os códigos http corretos nas respostas, eu não entendi bem quando usar qual.
    ```
    
    Fique a vontade para fazer aquele code-review com críticas e sugestões.

    Pedido Bônus:
    Também não aprendi como desenvolver testes em Node, e se alguém puder desenvolver os testes desta API para mim, ficarei muito agradecida.   
