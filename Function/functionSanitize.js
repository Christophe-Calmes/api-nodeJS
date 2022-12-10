const db = require('../connexion.js');
function fields (data, size) {
   let ok = true
   if(data.length == 0) {
       ok = false
   }
   if(data.length >= size){
       ok = false
   }
   return ok;
}
function creatData (SQL, body) {
   let array = [];
   let clean =  JSON.stringify(body);
   clean = clean.replace('{', '');
   clean = clean.replace('}', '');
   for (let index = 0; index < clean.length; index++) {
      clean = clean.replace('"', '');
      clean = clean.replace(':', ',')
   }
   clean = (clean.split(','));

   for (let index = 0; index < clean.length; index++) {
      if(index%2 == 1) {
         array.push(clean[index]);
      }
   }
   array.unshift(SQL);
   console.log(array);
   return array;
}


async function verifyID (sql, id) {
   const debug = true;

   // Construct requet
   // SQL = SELECT <id table> FROM <table> WHERE `idGroupe` =
   const array = [id]
   return new Promise ((resolve, reject) => {
      db.query(sql, array, (error, result) => {
         if(error){
            // En cas d'erreur on retour false pour stopper le traitement
            //console.log(resolv(error));
            return resolve(error);
         } else {
            if(debug){
               console.log(result[0].ok);
            }
            if(result[0].ok == 1) {
               console.log('Coucou');
               return true;
            } else {
               console.log('Pas coucou');
               return false;
            }
           
         }
      })
   })
}
module.exports = {fields, verifyID, creatData}