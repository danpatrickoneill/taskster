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
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log(title);
    setIsLoading(true);

    const newTask = {
      title,
      description,
      createdAt: new Date(1737853422013).toISOString(),
      isCompleted: false,
    };

    emitCreateTask(newTask);
  };

  const buttonText = "Create Task";
  const label = "Completed";

  return (
    <Box sx={{ minWidth: 275, maxWidth: 550 }}>
      <Card>
        <CardContent>
          <FormGroup>
            <TextField
              required
              id="filled-required"
              label="Task name"
              defaultValue="TODO"
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="standard-multiline-static"
              label="What specifically to do"
              multiline
              rows={4}
              defaultValue="Get into it"
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
