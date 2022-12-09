const db = require('../connexion.js');
function fields (data, size) {
   let ok = true
   if(data.length === 0) {
       ok = false
   }
   if(data.length >= size){
       ok = false
   }
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
   return array;
}


function verifyID (sql, id) {
   // Construct requet
   // SQL = SELECT <id table> FROM <table> WHERE `idGroupe` =
   const SQL = sql + id;
   const element = db.query(SQL);
   console.log(element);
   /*if(element != null) {
      return true;
   } else {
      return false;
   }*/

}
module.exports = {fields, verifyID, creatData}