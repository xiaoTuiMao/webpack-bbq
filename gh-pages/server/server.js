const http = require('http');

const st = require('st');

const config = require('../config');

const port = Number(process.env.PORT) || 8080;
const server = http.createServer(st({ path: config.outputdir, url: config.rootdir }));

module.exports = server;

if (require.main === module) {
  server.listen(port, function () {
    console.info(`server is listening at ${JSON.stringify(this.address())}`);
  });
}
