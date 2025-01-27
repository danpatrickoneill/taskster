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
function generateObjectId() {
  return Math.random().toString(16).slice(2);
}
function emitTasks(socket) {
  return socket.emit();
}

io.on("connection", (socket) => {
  console.log(TASKS);
  socket.onAny((eventName, ...args) => {
    console.log(eventName);
    console.log(args);
  });
  socket.on("create task", (task) => {
    const _id = generateObjectId();
    const createdAt = Date.now();
    const taskWithInfo = { ...task, _id, createdAt };
    TASKS.push(taskWithInfo);
    io.emit("tasks updated", TASKS);
  });
  socket.on("update task", (task) => {
    console.log(58, task);
    const searchId = task._id;
    console.log(59, TASKS, searchId);
    TASKS.splice(
      TASKS.findIndex((e) => e._id === searchId),
      1,
      task
    );
    console.log(TASKS);
    io.emit("tasks updated", TASKS);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(4000, () => {
  console.log("server running at http://localhost:4000");
});
