let express = require('express');

const {Tickets} = require('../db/creaDB');
const config = require('../config');
const { requireAuthentication } = require('../authentication');
const { success, error } = require('../utils');

let router = express.Router();

 const LIMIT_API = 100;

router
    .all('*', requireAuthentication)
    // Vérifier le compteur d'appel à l'API
    .all('*', (req, res, next) => {
        config.counter++;

        if(config.counter > LIMIT_API) {
            res.json(error("Fin de l'essai gratuit, veuillez payer."));
        }

        next();
    })
    .get('/', (req, res) => {
        Tickets.findAll().then((tab) => {
            res.json(success('Tous les tickets : ',tab));
        })
    })
    .get('/:id', (req, res) => {

        Tickets.findByPk(req.params.id).then((el) => {
            if (!el) {
                res.json(error('Ce ticket n\'existe pas !'))
            }
            res.json(success(`Le ticket numéro ${req.params.id} :`,el));
        })
    })
    .post('/', (req, res) => {
        const { nom, description, nbTicketRestant, urlPhoto } = req.body;

        console.log(req.body);

        Tickets.create({
            name: nom,
            description: description,
            nbLefts: nbTicketRestant,
            urlImage: urlPhoto
        }).then((elem) => {
            res.json(success(elem));
        }).catch((e) => {
            res.json(error(e));
        })
    })
    .put('/:id', (req, res) => {
        const { nom, description, nbTicketRestant, urlPhoto } = req.body;
        Tickets.findByPk(req.params.id).then((elem) => {
            if(!elem) {
                res.json(error(`Le ticket numéro ${req.params.id} n'existe pas et ne peut pas être mis à jour.`));
            } else {
                Tickets.update({
                    name: nom,
                    description: description,
                    nbLefts: nbTicketRestant,
                    urlImage: urlPhoto
                }, {
                    where: {id: req.params.id}
                }).then(() => {
                    Tickets.sync().then(() => {
                        Tickets.findByPk(req.params.id).then((newObj) => {
                            res.json(success(`Le ticket numéro ${req.params.id} a bien été mis à jour !`,newObj));
                        });
                    })
                });
            }
        });

    })
    .delete('/:id', (req, res) => {

        Tickets.findOne({ where:{id: req.params.id}}).then((elem) => {
            if(elem) {
                Tickets.destroy({ where: {id: req.params.id}}).then(() => {
                    res.json(success(`Le ticket numéro ${req.params.id} a bien été supprimé !`))
                })

            } else {
                res.json(error(`Ticket avec l'ID ${req.params.id} n'existe pas.`))
            }
        })
    });

module.exports = router;