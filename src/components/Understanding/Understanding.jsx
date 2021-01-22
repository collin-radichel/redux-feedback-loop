import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button'

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [understanding, setUnderstanding] = useState("");

  const handleChange = (event) => {
    setUnderstanding(event.target.value);
  };

  const handleSubmit = (understanding) => {
    history.push('/support');
    dispatch({ type: "ADD_UNDERSTANDING", payload: understanding });
  };

  return (
      <>
      <h1>How well did you understand the material today? On a scale of 0 - 5</h1>
      <InputLabel>Understanding</InputLabel>
      <Select
        onChange={handleChange}
        value={understanding}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={0}>0</MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <Button variant="contained" color="primary" onClick={() => handleSubmit(understanding)}>SUBMIT</Button>
    </>
  );
}

export default Understanding;