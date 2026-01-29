const http = require('http');
const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>this is my main home page</h1> and it is served by node js server");
    } else if (req.url === "/about_us") {
        res.write("this is my about us page");
    } else if (req.url === "/contact") {
        res.write("this is my contact us page");
    }
    // else if(req.url==="/api/v1"){
    //     res.setHeader('Content-Type','text/plain');
    //     res.write("")}
    else {
        res.write("404 page not found");
    }
    res.end();
});
//JSON--- JavaScript object notation
//JSON vstores the value in key value
// eg:{ id:1 name:"GLA University"}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


