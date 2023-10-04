# cognum

# Este projeto foi desenvolvido como parte do processo seletivo para a vaga de desenvolvedor Node.js na empresa Cognum.

Desafio 1: Implementação de uma API RESTful usando Express.js

O código apresenta uma controladora de API em JavaScript que possui um método assíncrono chamado message. Esse método retorna uma resposta JSON com a mensagem "Hello, Cognum!" e um código de status 200. A instância da controladora é exportada no final para ser utilizada em outras partes do projeto, seguindo o padrão comum em frameworks web como o Express.js(que é o utilizado neste projeto).

Desafio 2: Integração com Banco de Dados e Operações CRUD

Escolha um banco de dados (MySQL, PostgreSQL, MongoDB).
Implemente um CRUD para o recurso Employee (id, name, role).
Suporta operações CREATE, READ, UPDATE, DELETE.

1. Estrutura do Projeto:
   A aplicação consiste em arquivos e diretórios organizados da seguinte forma:
   src/controllers/UserController.js: Contém a lógica para manipular requisições relacionadas aos usuários.
   routes.js: Define as rotas da API, mapeando endpoints para funções do controlador.
   prisma.schema: Define o modelo do banco de dados usando Prisma.
   Outros arquivos como dotenv e bibliotecas (express, cors) são importados para configurar o servidor.
2. Configuração Inicial:
   Antes de iniciar o servidor, crie um arquivo .env e defina as variáveis de ambiente necessárias, como DATABASE_URL.
3. Inicializando o Servidor:
   Use o comando yarn dev para iniciar o servidor.
   O servidor irá rodar na porta 3000 e estará acessível em http://localhost:3000.

## Bibliotecas Utilizadas

- [dotenv](https://www.npmjs.com/package/dotenv): ^16.3.1
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [nodemon](https://www.npmjs.com/package/nodemon): ^2.0.22
- [prisma](https://www.prisma.io/): ^5.3.1
