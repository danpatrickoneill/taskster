import Task from "./Task";
import { Stack, ListItem } from "@mui/material";
import NewTaskForm from "./NewTaskForm";

export default function List(props) {
  const { tasks, updateTask } = props;
  console.log(3, tasks, updateTask);

  const handleCheckboxChange = (task, isCompleted) => {
    const updatedTask = { ...task, isCompleted };
    console.log(11, updatedTask);
    updateTask(updatedTask);
  };

  return (
    <Stack spacing={4}>
      {tasks.map((task) => (
        <Task
          task={task}
          title={task.title}
          description={task.description}
          isCompleted={task.isCompleted}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
      <NewTaskForm />
    </Stack>
  );
}
