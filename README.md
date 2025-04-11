# anki-app

My first full stack project to compile my knowledge acquired  my Degree in Software Engineer;

node version: 22.14.0

**MERN STACK**

BD: MongoDB

BACK-END: NodeJS, express

FRONT-END: NextJS

## To-do

- [x] DER

- [x] Create Back-End
 - [x] Create project in mongo compass: anki-app
 - [x] initialize package.json
 - [x] connect in DB
 - [x] Login ready
 - [ ] install dependencies
  - [x] npm i express
  - [x] npm i mongoose
  - [x] npm i bcrypt
  - [x] npm i jsonwebtoken
  - [x] npm i cors
  - [ ] npm i path - optional
  - [ ] npm i process - to read files
  - [ ] double check on routes of users and control of access to sensity routes
  

 - [x]  models, repositories, services, controllers
  - [x] User
  - [x] Anki
  - [x] Cards
  - [x] Languages 
  - [ ] route for files csv

[ ] Create front-End
 - [x] separate folders
 - [x] npm init 
 - [x] npm i next
 - [x] Create basic front-end
 - [x] create home
 - [x] Create login
  - https://tailwindcss.com/docs/dark-mode
 - [ ] Route for user
 - [x] Route for anki
 - [x] Route for languague
 - [ ] Route for card
 - [x] lib of componentes: https://headlessui.com/react/button
 - [ ] dark mode in navigation 

 
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

Exemple PostUser
  "name": "Vinicius Morais",
  "login": "vmorais",
  "password": "1234X",
  "email": "vmorais@gg.com"

Exemple Response:
  "name": "Vinicius Morais",
  "login": "vmorais",
  "password": "$2b$10$h2l0janPYq8aupUhJD8oC.FFJsBwo6Dlaol67YB0EL6iOdbTzPzpW",
  "email": "vmorais@gg.com",
  "_id": "67e3f6990e2fb4c9fa9d76da",
  "createdAt": "2025-03-26T12:44:09.996Z",
  "__v": 0

/login - Generates a token, this token is the solicited in the function verifiyToken from the middleware; And used in Postman calls 


-- 
Ref card styling: https://dev.to/mematthew123/how-to-twist-cards-using-tailwind-css-23pi?context=digest

