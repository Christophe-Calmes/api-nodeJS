const ModelsGroupes = require('../Models/ModelsGroupes.js');
let modelsGroupe = require('../Models/ModelsGroupes.js');
var {fields, verifyID} = require('../Function/functionSanitize.js');
const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = require('react-dom/cjs/react-dom.production.min.js');
let models = new ModelsGroupes();
const debug = true;

    
class Groups {
    async listAllGroup (req, res) {
            console.log(req);
            // Tableau pour la construction du moidels
            let array = ["SELECT `groupe` FROM `Groupes`"];
            res.send(await models.controlerGetGeneral(array));
            res.status(200);
    }
    async listUserAllGroups (req, res){
        res.status(200);
        res.send('User groupes');
    }

    
    addGroups (req, res) {
        let data = req.body.groupe;
        // Controle champs vide et taille
        let ok = fields (data, 60);
        if (!ok) {
            // Construction du tableau
            let array = ["INSERT INTO `Groupes`(`groupe`) VALUES (?)"];
            array.push(req.body.groupe)
            models.addG(array);
            res.status(200);
            res.send('Ajouter un groupe');
        } else {
            res.status(400);
            res.send('Champs vide ou trop long')
        }
    }
    updateGroups (req, res) {
        console.log(req.body.groupe);
        let data = req.body.groupe;
        let id = req.body.id;
        let ok = fields(data, 60);
        //let SQL = "SELECT `idGroupe` FROM `Groupes` WHERE `idGroupe` =";

        let idOK = verifyID(SQL, id);
        if(id.isInteger() && !ok){
            models.updatedG(req);
            res.status(200);
            res.send('Modifier un groupe');
        } else {
            res.status(400);
            res.send('Champs vide ou trop long ou groupe inexistant');
        }
      
    }
    async delGroups (req, res) {
        const IDGROUPE = parseInt(req.params.idGroupe);
        res.status(200);
        res.send('User '+IDGROUPE+' deleted');
    }
}
module.exports = Groups;