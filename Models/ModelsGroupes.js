const db = require('../connexion.js');
//let connect = require('../connexion.js');
let debug = true;
class ModelsGroupes {
    getGeneral(data) {
        const SQL = data[0];
        data.shift();
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
    postCUD(data) {
        const SQL = data[0];
        data.shift()

        db.query(SQL, data)
    }
}
module.exports = ModelsGroupes;