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
module.exports = {fields, verifyID}