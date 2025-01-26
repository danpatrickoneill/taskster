import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} from "@mui/material/";
import "./Task.css";

export default function Task(props) {
  const { title, description } = props;
  const buttonText = "Create Task";
  const label = "Completed";
  return (
    <div className="taskContainer">
      <p>{title}</p>
      <p>{description}</p>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label={label} />
      </FormGroup>
    </div>
  );
}
