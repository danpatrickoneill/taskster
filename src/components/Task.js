import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
} from "@mui/material/";
import "./Task.css";
import { useState, useEffect } from "react";
import { emitToggleTaskComplete, emitCreateTask } from "../helpers/emitters";

export default function Task(props) {
  console.log(14, props.isCompleted);
  const { _id, title, description, isCompleted } = props.task;

  //   console.log(props.task, isCompleted);

  const buttonText = "Create Task";
  const label = "Completed";
  const handleClick = () => {
    emitToggleTaskComplete({ ...props.task, isCompleted: !isCompleted });
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
            onChange={handleClick}
            inputProps={{ "aria-label": "controlled" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
