import { socket } from "../socket";

export function emitToggleTaskComplete(task) {
  console.log(8, task);
  socket.timeout(5000).emit("update task", task);
}

export function emitCreateTask(task) {
  socket.timeout(5000).emit("create task", task);
}

export function emitDeleteTask(id) {
  socket.timeout(5000).emit("delete task", id);
}
