const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

let SESSION_TASKS = [];

function generateObjectId() {
  return Math.random().toString(16).slice(2);
}

io.on("connection", (socket) => {
  console.log(SESSION_TASKS);
  socket.onAny((eventName, ...args) => {
    console.log(eventName);
    console.log(args);
  });
  socket.on("create task", (task) => {
    const _id = generateObjectId();
    const createdAt = Date.now();
    const taskWithInfo = { ...task, _id, createdAt };
    SESSION_TASKS.push(taskWithInfo);
    io.emit("tasks updated", SESSION_TASKS);
  });
  socket.on("update task", (task) => {
    console.log(58, task);
    const searchId = task._id;
    console.log(59, SESSION_TASKS, searchId);
    SESSION_TASKS.splice(
      SESSION_TASKS.findIndex((e) => e._id === searchId),
      1,
      task
    );
    console.log(SESSION_TASKS);
    io.emit("tasks updated", SESSION_TASKS);
  });
  socket.on("delete task", (id) => {
    console.log(71, id);
    console.log(72, SESSION_TASKS);
    SESSION_TASKS = SESSION_TASKS.filter((e) => e._id !== id);
    console.log(SESSION_TASKS);
    io.emit("tasks updated", SESSION_TASKS);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(4000, () => {
  console.log("server running at http://localhost:4000");
});
