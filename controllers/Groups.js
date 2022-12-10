const ModelsGroupes = require('../Models/ModelsGroupes.js');
let modelsGroupe = require('../Models/ModelsGroupes.js');
var {fields, verifyID, creatData} = require('../Function/functionSanitize.js');
let models = new ModelsGroupes();
const debug = true;
    
class Groups {
    async listAllGroup (req, res) {
            // Construction du data array
            let arrayReq = ["SELECT `groupe` FROM `Groupes`"];
            res.send(await models.getGeneral(arrayReq));
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
            const SQL = "INSERT INTO `Groupes`(`groupe`) VALUES (?)";
            let array = creatData(SQL, req.body);
                if(debug){
                    console.log(array)
                }
            models.postCUD(array);
            res.status(200);
            res.send('Ajouter un groupe');
        } else {
            res.status(400);
            res.send('Champs vide ou trop long')
        }
    }
    updateGroups (req, res) {
        if(debug){
            console.log(req.body.groupe);
        }
        // if idGroupe is real
        const id = req.body.idGroupe;
        const data = req.body.groupe;
        console.log(id);
        const controlSQL = "SELECT COUNT(`idGroupe`) AS `ok` FROM `Groupes` WHERE `idGroupe`= ?";
        if(fields(data, 60) && verifyID(controlSQL, id)){
            const SQL = "UPDATE `Groupes` SET `groupe`= ?, `updatedAt`= NOW() WHERE `idGroupe` = ?";
            let array = creatData(SQL, req.body);
            if(debug){
                console.log(array);
            }
            models.postCUD(array);
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