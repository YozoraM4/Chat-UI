import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
const {  NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const { createServer } = require('https');
const { readFileSync } = require('fs');
const ssl_port = 3000;

const options = {
  key: readFileSync('/home/yozora/localhost.key'),
  cert: readFileSync('/home/yozora/localhost.crt'),
  passphrase: "1234"
};

// const FileStore = new sessionFileStore(session);
// 
const { handler } = polka()
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        sapper.middleware()
    )
    .get('*', (req, res) => {
        res.end(`POLKA: Hello from ${req.pathname}`);
    });
//   .listen(PORT, err => {
//     if (err) console.log('error', err);
//   });

  createServer(options, handler).listen(ssl_port, _ => {
    console.log(`> Running on https://localhost:${ssl_port}`);
});
