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
    var leagueID = parseInt(req.params.id);
    db.one('select * from league where id = $1', leagueID)
        .then(function(data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retrieved ONE league'
            });
        })
        .catch(function(err) {
            return next(err);
        });
}
function createLeague(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none(
        'insert into league(league_cost, year, is_active, name)' +
            'values(${league_cost}, ${year}, ${is_active}, ${name})',
        req.body
    )
        .then(function() {
            res.status(200).json({
                status: 'success',
                message: 'Inserted one league'
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

function updateLeague(req, res, next) {
    db.none(
        'update league set league_cost=$1, year=$2, is_active=$3, name=$4 where id=$5',
        [
            req.body.name,
            req.body.breed,
            parseInt(req.body.age),
            req.body.sex,
            parseInt(req.params.id)
        ]
    )
        .then(function() {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Updated league'
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

function removeLeague(req, res, next) {
    var leagueID = parseInt(req.params.id);
    db.result('delete from league where id = $1', leagueID)
        .then(function(result) {
            res.status(200).json({
                status: 'success',
                message: `Removed ${result.rowCount} league`
            });
        })
        .catch(function(err) {
            return next(err);
        });
}

module.exports = {
    getAllLeagues: getAllLeagues,
    getSingleLeague: getSingleLeague,
    createLeague: createLeague,
    updateLeague: updateLeague,
    removeLeague: removeLeague
};
