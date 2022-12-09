// Initiatlisation du serveur API
var express = require('express');
const app = express();
// Création des routes
// Routeur
var usersRouter = require('./routers/usersRouter.js');
var groupesRouter = require('./routers/groupesRouter.js');
app.use('/users', usersRouter);
app.use('/groupes/', groupesRouter);
//app.use('/users/', userController);
app.use(express.json());
// Body parser 
var bodyParser = require('body-parser');  
  
// Prise en charge du JSON.  
app.use(bodyParser.json());  

// console.log de req.body
// Création du port pour l'api
const PORT = 3000;
app.listen(PORT, console.log('Server ok'));