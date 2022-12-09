// Debug
let debug = false;
// Debug

var express = require('express');
var router = express.Router();
let Users = require('../controllers/Users.js');
let userController = new Users();

// Les routes de la table Users
// Routes  app.<nom de la route> = ('/routes/', (req, res) => { La logique })

router.get('/allUsers/', userController.postAllUsers)
router.get('/profilUser/:id', userController.profilUser)
// PUT
router.put('/modUser/', userController.modUser)
router.put('/adminUser/:id', userController. adminUserId)
// POST
router.post('/inscriptionUser/:firstname/:lastname/:password/:email/:idGroupes', userController.registrationUser)
router.post('/affliationGroupe/:idUser/:idGroupe', userController.groupAffiliation)
router.post('/connexion/:username/:password', userController.connectionUser)
// Delete
router.delete('/delUser/:id', userController.del);
// Affichage debug
if(debug) {
    console.log(userController.del)
    console.log(userController.postAllUsers)
    console.log(userController.postAllUsers)
    console.log(userController.profilUser)
    console.log(userController.modUser)
    console.log(userController.adminUserId)
    console.log(userController.registrationUser)
    console.log(userController.groupAffiliation)
    console.log(userController.connectionUser)
}
// Export 
module.exports = router;