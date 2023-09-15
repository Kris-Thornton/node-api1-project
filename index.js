const server = require('./api/server');

const port = 3000;

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log('listening on', port)
})


console.log('yep')