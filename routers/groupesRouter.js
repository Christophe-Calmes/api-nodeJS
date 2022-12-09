let debug  = false;
var express = require('express');
var router = express.Router();
let Groups = require('../controllers/Groups.js');
//let connexionDB = require('../controllers/connexion.js');
// Body parser 
var bodyParser = require('body-parser');  
const bodyParserJSON = bodyParser.json();
// Test
let GroupsController = new Groups();

// Get
router.get('/allGroupes/', GroupsController.listAllGroup);
router.get('/users_groupes/', GroupsController.listUserAllGroups);
// POST
router.post('/addGroupes/', bodyParserJSON, GroupsController.addGroups);
router.post('/updateGroupes/', bodyParserJSON, GroupsController.updateGroups);

// Delete
router.delete('/deleteGroupes/:idGroupe', GroupsController.delGroups)
// Debug
if(debug) {
    console.log(GroupsController.listAllGroup)
    console.log(GroupsController.listUserAllGroups)
    console.log(GroupsController.addGroups)
    console.log(GroupsController.updateGroups)
    console.log(GroupsController.delGroups)
}

// Export 
module.exports = router;