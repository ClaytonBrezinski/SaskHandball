const pg = require('pg');
const keys = require('../config/keys');
var promise = require('bluebird');

var pgp = require('pg-promise')({ promiseLib: promise });

if (process.env.NODE_ENV != 'production') {
    var postgresConfig = {
        host: keys.databaseHost,
        port: keys.databasePort,
        database: keys.databaseName,
        user: keys.databaseUser,
        password: keys.databasePassword,
        ssl: true
    };
}

var db = pgp(postgresConfig);

function getAllLeagues(req, res, next) {
    db.any('select * from league')
        .then(function(data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retrieved ALL leagues'
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

function getSingleLeague(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from league where id = $1', pupID)
        .then(function(data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retrieved ONE puppy'
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

module.exports = {
    getAllLeagues: getAllLeagues,
    getSingleLeague: getSingleLeague
    // createLeague: createLeague,
    // updateLeague: updateLeague,
    // removeLeague: removeLeague
};
