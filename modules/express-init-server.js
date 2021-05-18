let express = require('express');

express.initServer = (initialPath, port) => {
    const app = express();
    app.get('/', (req, res) => {
        res.send('<h1>This is your first path with express.</h1>');
        res.end();
    });

    app.listen(port, () => {
        console.log(`Express is running at port: "${port}" and initial path: "${initialPath}".`);
    });
}


module.exports = express;