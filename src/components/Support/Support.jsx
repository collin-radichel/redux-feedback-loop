import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button'

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [support, setSupport] = useState("");

  const handleChange = (event) => {
    setSupport(event.target.value);
  };

  const handleSubmit = (support) => {
    history.push('/comments');
    dispatch({ type: "ADD_SUPPORT", payload: support });
  };

  return (
      <>
      <h1>How supported did you feel today? On a scale of 0 - 5</h1>
      <InputLabel>Support</InputLabel>
      <Select
        onChange={handleChange}
        value={support}
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
      <Button variant="contained" color="primary" onClick={() => handleSubmit(support)}>SUBMIT</Button>
    </>
  );
}

export default Support;