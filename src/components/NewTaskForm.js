import {
  Box,
  Button,
  Card,
  CardContent,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material/";
import { socket } from "../socket";
import { useState } from "react";
import { emitCreateTask } from "../helpers/emitters";

export default function NewTaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    if (title.length && description.length) {
      const newTask = {
        title,
        description,
        createdAt: new Date(1737853422013).toISOString(),
        isCompleted: false,
      };

      emitCreateTask(newTask);
      setTitle("");
      setDescription("");
    }
  };

  const buttonText = "Create Task";
  const label = "Completed";

  return (
    <Box sx={{ minWidth: 200, maxWidth: 400 }}>
      <Card>
        <CardContent>
          <FormGroup>
            <TextField
              required
              id="filled-required"
              label="What do you need to do?"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="standard-multiline-static"
              label="How do you want to do it?"
              value={description}
              multiline
              rows={4}
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={handleClick} variant="contained">
              {buttonText}
            </Button>
          </FormGroup>
        </CardContent>
      </Card>
    </Box>
  );
}
