const {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
} = require("@mui/material/");
export default function TaskCard() {
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
        <Button variant="contained">{buttonText}</Button>
        <FormControlLabel control={<Checkbox />} label={label} />
      </FormGroup>
    </>
  );
}
