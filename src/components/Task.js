import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material/";
import "./Task.css";
import { useState, useEffect } from "react";
import {
  emitToggleTaskComplete,
  emitCreateTask,
  emitDeleteTask,
} from "../helpers/emitters";

export default function Task(props) {
  console.log(14, props.isCompleted);
  const { _id, title, description, isCompleted } = props.task;
  const [isShowingWarning, setIsShowingWarning] = useState(false);

  //   console.log(props.task, isCompleted);

  const buttonText = "Create Task";
  const label = "Completed";
  const onCheckboxChange = () => {
    emitToggleTaskComplete({ ...props.task, isCompleted: !isCompleted });
    setIsShowingWarning(false);
  };
  const onDeleteClick = () => {
    if (!isCompleted && !isShowingWarning) {
      setIsShowingWarning(true);
      return;
    }
    emitDeleteTask(_id);
  };

  return (
    <Box sx={{ minWidth: 275, maxWidth: 550 }}>
      <p>{isCompleted ? "COMPLETE" : "NOT COMPLETE"}</p>
      <Card>
        <CardContent>
          <p>{title}</p>
          <p>{description}</p>
          <Checkbox
            checked={isCompleted}
            onChange={onCheckboxChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          {isShowingWarning ? (
            <Alert variant="outlined" severity="warning">
              Task is not yet complete. Click delete again if you're sure!
            </Alert>
          ) : null}
          <Button variant="contained" color="error" onClick={onDeleteClick}>
            DELETE TASK
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
