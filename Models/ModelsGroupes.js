const db = require('../connexion.js');
//let connect = require('../connexion.js');
let debug = true;
class ModelsGroupes {
    listG () {
        return new Promise ((resolve, reject) => {
            db.query('SELECT `groupe` FROM `Groupes`', (error, result)=>{
                if(error) {
                    return result(error);
                } else {
                    return resolve(result);
                }
            })
        })
    }
    addG (data) {
        
        if(debug) {
            console.log(data.body.groupe);
        }
        
        const groupe = data.body.groupe;
        db.query('INSERT INTO `Groupes`(`groupe`) VALUES (?)', [groupe]);
    }
    upatedG (data) {
        if(debug) {
            console.log(data.body.groupe);
            console.log(data.body.id);
        }
        const id = data.body.id;
        const groupe = data.body.groupe;
        db.query('UPDATE `Groupes` SET `groupe`= ?,`updatedAt`= ? WHERE `idGroupe` = '+ id, [groupe])
    }
    /*controleCUDGeneral(data) {
        if(debug){
            console.log(data);
        }
        // Extraction de la requête
        const SQL =  data[0];
        // Nettoyage du tableau
        data.shift(data);
        db.query(SQL, data)
    }*/


    controlerGetGeneral (data) {
        //console.log(data);
        // Extraction de la requête
        const SQL =  data[0];
        // Nettoyage du tableau
        data.shift(data);
        return new Promise ((resolve, reject) => {
            db.query(SQL, data, (error, result)=>{
                if(error) {
                    return result(error);
                } else {
                    return resolve(result);
                }
            })
        })
    }
}
module.exports = ModelsGroupes;