let express = require('express');

express.initServer = (initialPath, port) => {
    const app = express();
    app.get('/', (req, res) => {
        res.send('<h1>This is your first path with express.</h1>');
        res.end();
    });

    express.server = app.listen(port, () => {
        console.log(`Express is running at port: "${port}" and initial path: "${initialPath}".`);
    });
}

express.closeServer = (time) => {
    setTimeout(() => {
        console.log('Closing the server...');
        express.server.close((err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Server closed.')
        })
    }, time);
}

module.exports = express;