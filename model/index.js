var fs =require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env  = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env]

var db = {}

if(config.use_env_variable){
    var sequelise = new Sequelize(process.env[config.use_env_variable]);
}
else{
    var sequelize = new Sequelize(config.database,config.username,config.password);
}