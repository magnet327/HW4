const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    var path_list = req.url.split('/');
    // console.log(path_list);
    var joinpath = path.join(__dirname);
    for (var i = 0; i < path_list.length; i++) {
        if (path_list[i] != '') {
            joinpath = path.join(joinpath, path_list[i]);
        }
    }
    // console.log(joinpath);
    // console.log(path.extname(joinpath));
    var content_type = path.extname(joinpath).split('.')[1];

    switch (content_type) {
        case 'js':
            content_type = 'text/html';
            break;
        case 'png':
            content_type = 'image/png';
            break;
        case 'jpg':
            content_type = 'image/jpg';
            break;
        case 'svg':
            content_type = 'image/svg+xml';
            break;
        case 'html':
            content_type = 'text/html';
            break;
        case 'css':
            content_type = 'text/css';
            break;
        default:
            content_type = '';
            break;
    }
    console.log(req.url);
    if (req.url === '/' || req.url === '/home') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/about' || req.url === '/profile') {
        fs.readFile(path.join(__dirname, 'profile.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(content);
        });
    } else if (content_type != '') {
        fs.readFile(joinpath, (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': content_type });
            res.end(content);
        });
    } else {
        fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'Content-type': 'text/html' });
            res.end(content);
        });
    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});