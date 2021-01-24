import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import Card from "@material-ui/core/Card";

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();

  // local state for feeling
  const [feeling, setFeeling] = useState("");

  // on change of Select input field, set feeling
  // to event.target.value
  const handleChange = (event) => {
    setFeeling(event.target.value);
  };

  // onClick on submit button run handleSubmit
  const handleSubmit = (feeling) => {
    // form validation: if the feeling
    // is more than 0 dispatch and history.push to understanding page
    if (feeling > 0) {
      dispatch({ type: "ADD_FEELING", payload: feeling });
      history.push("/understanding");
    } else {
      // form validation, if the user selects 'none'
      Swal.fire({
        title: "Please select an input value",
      });
    }
  };

  return (
    <>
      <h1>How are you feeling today? On a scale of 1 - 5</h1>
      <Card>
        <InputLabel>Feeling</InputLabel>
        <Select onChange={handleChange} value={feeling}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit(feeling)}
          className="submitBtn"
        >
          SUBMIT
        </Button>
      </Card>
    </>
  );
}

export default Feeling;
