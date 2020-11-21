module.exports = (options, imports, register) => {
    const modules = require('./config/modules');

    modules.setImports(imports);
    modules.getOptions(options);

    const routes = require('./routes');
    
    register(null, {
        analyticsRoutes: routes
    });
    }
    
    
    