const architect = require('architect');
const {join} = require('path');
const configPath = join(__dirname, 'modules.js');
const config = architect.loadConfig(configPath);


architect.createApp(config, (err, app) => {
    if(err) throw err;
    console.log("App started");
})