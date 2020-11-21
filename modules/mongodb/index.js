"use strict";

module.exports = (options, imports, register) => {

    const {join} = require('path');
    const fs = require('fs');
    const mongoose = require('mongoose');

    const env = options.environment || "development";

    const config = require('./config/database')[env];

    const url = `mongodb+srv://${config.username}:${config.password}@${config.host}`;

    mongoose.connect(url, { useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true })
        .then(() => {
            console.log('connected to mongo DB')
        })
        .catch((Err) => {
            console.log('Error connecting to mongo DB', Err);
        });

    const db = {};
    let modelPath = join(__dirname, '/models');
    fs
        .readdirSync(modelPath)
        .filter((file) =>  {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .forEach((file) =>  {
            let model = require(join(modelPath, file));

            db[(file.replace('.js', ''))] = model;
        });


    register(null, {
        models : db
    });

};