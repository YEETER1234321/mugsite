const express = reuqire("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.urlEncoded({ extended: true }));
app.use(express .json());

app.use(express.static(__dirname + "/public/media"));
app.use(express.static(__dirname + "/public/data"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/login/submit", (req, res) => {
    console.log(req.body);
});

app.post("/register/submit", (req, res) => {
    console.log(req.body);
});

io.on("connection", (socket) => {
    console.log("New connection: " + socket.id);
});

http.listen(3000);