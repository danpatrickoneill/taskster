import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material/";
import { socket } from "../socket";
import { useState } from "react";

export default function NewTaskForm() {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    const newTask = {
      id: 1,
      title: "Wash dishes",
      description: "Scrubby scrubby scrubby scrub.",
      createdAt: new Date(1737853422013).toISOString(),
    };

    socket.timeout(5000).emit("create task", newTask);
  };

  const buttonText = "Create Task";
  const label = "Completed";

  return (
    <>
      <FormGroup>
        <TextField
          required
          id="filled-required"
          label="Task name"
          defaultValue="TODO"
          variant="standard"
        />
        <TextField
          id="standard-multiline-static"
          label="HOWDOYOUDO"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
        <Button onClick={handleClick} variant="contained">
          {buttonText}
        </Button>
      </FormGroup>
    </>
  );
}
