import logo from "./logo.svg";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import Task from "./components/Task";

const tasks = {};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <List tasks={tasks}/> */}
        <Task
          title="Sample Task"
          description="This is what I need to do, more specfically"
        />
      </header>
    </div>
  );
}

export default App;
