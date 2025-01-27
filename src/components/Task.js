import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material/";
import "./Task.css";
import { socket } from "../socket";
import { useState, useEffect } from "react";

export default function Task(props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (b) => {
    console.log(b);

    console.log(title);
    setIsLoading(true);

    const newTask = {
      title,
      description,
      createdAt: new Date(1737853422013).toISOString(),
    };

    socket.timeout(5000).emit("update task", newTask);
  };

  const [isCompleted, setisCompleted] = useState(
    props.task.isCompleted || false
  );

  const { title, description } = props.task;
  const buttonText = "Create Task";
  const label = "Completed";
  return (
    <Box sx={{ minWidth: 275, maxWidth: 550 }}>
      <Card>
        <CardContent>
          <p>{title}</p>
          <p>{description}</p>
          <Checkbox onChange={(e) => handleClick(e.target.value)} />
        </CardContent>
      </Card>
    </Box>
  );
}
