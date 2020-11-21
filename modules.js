const {join} = require('path');
require('dotenv').config({path: join(__dirname, '.env')});

module.exports = [{
  packagePath: './modules/core',
  port: process.env.PORT || 3000
},{
    packagePath: './modules/mongodb'
}, {
    packagePath: './modules/analytics'
}]