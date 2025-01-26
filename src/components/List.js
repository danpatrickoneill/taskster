import Task from "./Task";

export default function List(props) {
  const { tasks } = props;
  console.log(3, tasks);

  return (
    <div>
      {tasks.map((task) => (
        <Task title={task.title} description={task.description} />
      ))}
    </div>
  );
}
