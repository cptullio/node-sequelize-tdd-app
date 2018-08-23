'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var modelPath = __dirname + "/model/";
var env       = process.env.NODE_ENV || 'development';
var config    = require('./config')[env];
var db        = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);
db['User'] = sequelize['import'](path.join(modelPath,'user'));
db['Region'] = sequelize['import'](path.join(modelPath,'region'));
db['Payment'] = sequelize['import'](path.join(modelPath,'payment'));

db.User.associate(db);
db.Payment.associate(db);
db.Region.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;