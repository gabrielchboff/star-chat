const express = require('express');
const http = require("http");
const cors = require("cors");

const app = express();
const port = 3001;
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"] 
    },
});

io.on("connection", (socket) => {
    console.log(`# User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User id : ${socket.id} - Room: ${data}`)
    })
    socket.on("send_message", (data) => {
        console.log(data)
    })

    socket.on("disconnect", () => {
        console.log("# User Disconnected: ", socket.id)
    })
});

server.listen(port, ()=> {
    console.log(`# Server running at ${port}`);
});