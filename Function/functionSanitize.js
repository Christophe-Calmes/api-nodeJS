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

module.exports = {fields}