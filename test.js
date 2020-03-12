var net = require('net');
const process = require('process');

// This server listens on a Unix socket at /var/run/mysocket
var unixServer = net.createServer(function(client) {
        console.log("ok");
client.on("data", function(data) {
   console.log(data.toString('utf-8'));
});
    // Do something with the client connection
});
unixServer.listen('/var/run/jc');

function shutdown() {
    unixServer.close(); // socket file is automatically removed here
    process.exit();
}

process.on('SIGINT', shutdown);
