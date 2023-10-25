
const http = require("http");
const port = 3000;
const jsondata = [{
    "what is Node js": " Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code on the server side. It was initially developed by Ryan Dahl in 2009 and has since gained significant popularity in the web development community. Node.js is built on the V8 JavaScript engine, which is the same engine that powers the Google Chrome web browser",
}, {
    "its features": {
        "1": "Non-blocking, asynchronous architecture: Node.js is designed to handle I/O operations efficiently by using an event-driven, non-blocking I/O model. This makes it well-suited for building scalable and high-performance network applications.",
        "2": "Single-threaded: Node.js uses a single-threaded event loop to handle requests and events, which can be more memory-efficient than traditional multi-threaded or multi-process server models.",
        "3": "NPM (Node Package Manager): NPM is the default package manager for Node.js, and it provides a vast ecosystem of open-source packages and libraries that developers can easily incorporate into their projects.",
        "4": "Server-side scripting: Node.js is often used for building server-side applications and web servers. It can handle HTTP requests, making it a popular choice for creating web APIs, real-time applications, and microservices.",
        "5": "Cross-platform: Node.js is compatible with various operating systems, including Windows, macOS, and Linux, making it easy for developers to write code that can run on different platforms without modification.",
    }
},
]
const app = http.createServer((req, res) => {
    if (req.url == "/Aboutus") {

        const data = JSON.stringify(jsondata)
        res.write(data)
        res.end()
    } else {

        res.write("<html>")
        res.write("<body>")
        res.write("<h1 > what is Node js </h1>")
        res.write("<h2> Node js is a open source ,cross plateform,single thered ,javascript runtime enviormant .</h2>")
        res.write("<h3> its features </h3>")
        res.write("<ul>")
        res.write("<li> Non-blocking, asynchronous architecture: Node.js is designed to handle I/O operations efficiently by using an event-driven, non-blocking I/O model. This makes it well-suited for building scalable and high-performance network applications. </li>")
        res.write("<li>Single-threaded: Node.js uses a single-threaded event loop to handle requests and events, which can be more memory-efficient than traditional multi-threaded or multi-process server models.  </li>")
        res.write("<li> NPM (Node Package Manager): NPM is the default package manager for Node.js, and it provides a vast ecosystem of open-source packages and libraries that developers can easily incorporate into their projects. </li>")
        res.write("<li> Server-side scripting: Node.js is often used for building server-side applications and web servers. It can handle HTTP requests, making it a popular choice for creating web APIs, real-time applications, and microservices. </li>")
        res.write("<li> Cross-platform: Node.js is compatible with various operating systems, including Windows, macOS, and Linux, making it easy for developers to write code that can run on different platforms without modification. </li>")
        res.write("</ul>")
        res.write("</body>")
        res.write("</html>")
        res.end()

    }
})
app.listen(port, () => {
    console.log(`server is running in the port ${port}`)
})
console.log("hello Vimal");