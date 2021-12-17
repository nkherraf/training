let express = require('express');

const { success, error } = require('../utils');
const { authentification } = require('../authentication');
const { Credentials } = require('../db/creaDB');

let router = express.Router();

router
    .post('/login', authentification)
    .post('/add', (req, res) => {
        var newUsername = req.body.username;
        var newPassword = req.body.password;
        Credentials.create({
            username: newUsername,
            password: newPassword
        }).then((tab) => {
            Credentials.sync();
            res.json(success(`User bien ajouté, identifiants : ${newUsername}, ${newPassword}`));
        })
    })
    .delete('/:username', (req, res) => {
        Credentials.findOne({ where:{username: req.params.username}}).then((elem) => {
            if(elem) {
                Credentials.destroy({ where: {username: req.params.username}}).then(() => {
                    res.json(success(`L'utilisateur ${req.params.username} a bien été supprimé !`))
                })

            } else {
                res.json(error("Username non trouvé"))
            }
        })
    })
    .get('/', (req, res) => {
        Credentials.findAll().then((tab) => {
            res.json(success("Liste des utilisateurs",tab));
        })
    })
    .put('/:username', (req, res) => {
        var userToUpdate = req.params.username;
        var {username, password} = req.body;
        Credentials.findOne({ where: {username: userToUpdate}}).then((elem) => {
            if(!elem) {
                res.json(error(`Aucun utilisateur ne s'appelle ${userToUpdate}`));
            } else {
                Credentials.update({
                    username: username,
                    password: password,
                }, {
                    where: { id: elem.dataValues.id}
                }).then(() => {
                    Credentials.findByPk(elem.dataValues.id).then((elem) => {
                        res.json(success(`L'utilisateur '${userToUpdate}' a bien été modifié !`,elem.dataValues));
                    })
                });
            }
        })
        
    })

module.exports = router;