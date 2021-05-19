const express = require('./modules/express-init-server');

express.initServer('/', 8081);

express.closeServer(5000);