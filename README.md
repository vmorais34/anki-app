# anki-app

My first full stack project to compile my knowledge acquired  my Degree in Software Engineer;

node version: 22.14.0

**MERN STACK**

BD: MongoDB

BACK-END: NodeJS, express

FRONT-END: NextJS

## To-do

[x] DER

[ ] Create Back-End
 - [ ] Create project in mongo compass: anki-app
 - [x] initialize package.json
 - [x] connect in DB
 - [ ] install dependencies
  - [x] npm i express
  - [x] npm i mongoose
  - [x] npm i bcrypt
  - [ ] npm i cors
  - [ ] npm i jsonwebtoken
  - [ ] npm i path - optional
  - [ ] npm i process - to read files
  

 - [ ]  models, repositories, services, controllers
  - [x] User
  - [ ] Anki
  - [ ] Cards
  - [ ] Languages 


### Fluxo correto

A sequência correta para a implementação das operações de CRUD na aplicação é Repositório > Serviço > Controlador

- O repositório gerencia a comunicação direta com o banco de dados.
- O serviço contém a lógica de negócios.
- O controlador recebe as requisições e chama os serviços.

Observações:

1. instalei o MongoDB como um service
  -  Pressione Win + R, digite services.msc e pressione Enter.
  - buscar pelo mongoDB e trocar para automatico
2. Para rodar o serviço: net start MongoDB
3. Para parar o serviço: net stop MongoDB

PostUser
  "name": "Vinicius Morais",
  "login": "vmorais",
  "password": "1234X",
  "email": "vmorais@gg.com"

Response:
  "name": "Vinicius Morais",
  "login": "vmorais",
  "password": "$2b$10$h2l0janPYq8aupUhJD8oC.FFJsBwo6Dlaol67YB0EL6iOdbTzPzpW",
  "email": "vmorais@gg.com",
  "_id": "67e3f6990e2fb4c9fa9d76da",
  "createdAt": "2025-03-26T12:44:09.996Z",
  "__v": 0
