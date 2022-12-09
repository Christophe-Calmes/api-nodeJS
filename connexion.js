let debug =  false;
// Connexion DB
const mysql = require('mysql2');
    var db = mysql.createConnection({
        host: 'localhost',
        user: 'api-nodeJS',
        database: 'api-nodeJS',
        password: 'plateforme22@',
        
    });
    
    if(debug) {
        console.log(db);
    }
module.exports = db; 