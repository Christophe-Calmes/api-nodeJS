class Users {
    postAllUsers (req, res) {
        res.status(200);
        res.send('All users');
    }
    profilUser (req, res) {
        const ID = parseInt(req.params.id);
        res.status(200);
        res.send('Profil users');
    }
    modUser (req, res) {
        res.status(200);
        res.send('Modification prise en compte');
    }
    adminUserId (req, res) {
        const ID = parseInt(req.params.id);
        res.status(200);
        res.send('AdminOneUser');  
    }
    // Inscription
    registrationUser (req, res) {
        res.status(200);
        res.send('Inscription user')
    }
    connectionUser (req, res) {
        const USERNAME = parse(req.params.username);
        const PASSWORD = parse(req.params.password);
        res.status(200);
        res.send('Connexion');
    }
    groupAffiliation (req, res) {
        res.status(200);
        res.send('Affiliation groupes');
    }
    del(req,res) {
        const id = parseInt(req.params.id)
        res.status(200);
        res.send('Delete user '+ id);
    }
}
module.exports = Users;