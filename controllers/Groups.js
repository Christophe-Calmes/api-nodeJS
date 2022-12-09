const ModelsGroupes = require('../Models/ModelsGroupes.js');
let modelsGroupe = require('../Models/ModelsGroupes.js');
var {fields, verifyID} = require('../Function/functionSanitize.js');
let models = new ModelsGroupes();

    
class Groups {
    async listAllGroup (req, res) {
            res.send(await models.listG());
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
            models.addG(req);
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
        let SQL = "SELECT `idGroupe` FROM `Groupes` WHERE `idGroupe` =";

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