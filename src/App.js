import "./App.css";
import { socket } from "./socket";
import List from "./components/List";
import { useState, useEffect } from "react";

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

    function onTaskEvent(value) {
      console.log(25, tasks);
      setTasks(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("tasks updated", onTaskEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("tasks updated", onTaskEvent);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Taskster</h1>
      </header>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
