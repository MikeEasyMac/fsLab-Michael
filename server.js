const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("File not found");
        }

        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        return res.end();
    });

}).listen(3000);

console.log("Image server running on port 3000");

