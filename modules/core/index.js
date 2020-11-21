module.exports = (options, imports, register) => {
const express = require('express');

const app = express();
 
const server = app.listen(3000, () => {
    console.log('server listening on port 3000');
});

app.use('/analytics', imports.analyticsRoutes);

register(null, {
    app
});
}


