const express = require("express");
const { log } = require("node:console");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const { TASKS } = require("./constants/TASKS");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

// app.get("/", (req, res) => {
//   res.json({
//     hi: "hello",
//   });
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");
//   socket.on("chat message", (msg) => {
//     console.log("message: " + msg);
//     io.emit("chat message", msg);
//   });
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
//   socket.onAny((eventName, ...args) => {
//     console.log(eventName);
//     console.log(args);
//   });
// });

io.on("connection", (socket) => {
  console.log(TASKS);
  socket.onAny((eventName, ...args) => {
    console.log(eventName);
    console.log(args);
  });
  socket.on("create task", (task) => {
    TASKS.push(task);
    io.emit("tasks updated", TASKS);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(4000, () => {
  console.log("server running at http://localhost:4000");
});

function initializeLists() {
  // get lists from local
  const currentTime = Date.now();
  const defaultList = {
    user: null,
    createdAt: currentTime,
    tasks: [],
  };
  // default list? good idea
}
