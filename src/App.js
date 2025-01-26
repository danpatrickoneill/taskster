import logo from "./logo.svg";
import "./App.css";
import { socket } from "./socket";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";
import { useState, useEffect } from "react";

const tasks = {};

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onTask(value) {
      setTasks((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("task", onTask);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("task", onTask);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewTaskForm />
        <Task
          title="Sample Task"
          description="This is what I need to do, more specfically"
        />
      </header>
    </div>
  );
}

export default App;
