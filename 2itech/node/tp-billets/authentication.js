var jwt = require('jsonwebtoken');
const { success, error } = require('./utils');
const { Credentials } = require('./db/creaDB');

const SECRET_KEY = 'JavascriptCestCool';

module.exports.requireAuthentication = (req, res, next) => {
    let token = req.get('X-MACADEMIA-TOKEN');
    let decoded;

    try {
        decoded = jwt.verify(token, SECRET_KEY); // Une erreur peut être levé ici !
    } catch (e) {
        res.statusCode = 401;
        throw new Error('Token invalide');
    }

    if (!decoded) {
        res.statusCode = 401;
        throw new Error('Connexion nécessaire !');
    }

    next();
};

module.exports.authentification = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    Credentials.findOne({ where: { username: username } }).then((elem) => {
        if(!elem) {
            res.json(error('Username non connu'));
        } else {
            if(password == elem.password) {
                res.json(success(jwt.sign(
                    { username }, // sera remplacé par username: username
                    SECRET_KEY,
                    { expiresIn: '1h' }
                )));
            } else {
                res.statusCode = 401;
                res.json(error('Mauvais password !'));
            }
        }
    })
};