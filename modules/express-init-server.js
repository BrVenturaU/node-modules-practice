let express = require('express');
let axios = require('./post-module');

express.initServer = (initialPath, port) => {
    const app = express();
    app.get('/', (req, res) => {
        res.send('<h1>This is your first path with express.</h1>');
        res.end();
    });
    
    app.get('/posts', (req, res) => {
        axios.get(3).then(posts =>{
            let html = `<h1>Listado de Posts</h1>`;
            posts.map(post => {
                html += `<div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>`
            });
            res.send(html);
            res.end();
        })
    });
    express.server = app.listen(port, () => {
        console.log(`Express is running at port: "${port}" and initial path: "${initialPath}".`);
    });
}

express.closeServer = (ms=1000) => {
    setTimeout(() => {
        console.log('Closing the server...');
        express.server.close((err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Server closed.')
        })
    }, ms);
}

module.exports = express;