import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";
import Card from "@material-ui/core/Card";

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

  //local state for understanding
  const [understanding, setUnderstanding] = useState("");

  // on change of Select input field, set understanding
  // to event.target.value
  const handleChange = (event) => {
    setUnderstanding(event.target.value);
  };

  // onClick on submit button run handleSubmit
  const handleSubmit = (understanding) => {
  // form validation: if the understanding
  // is more than 0 dispatch and history.push to support page
    if (understanding > 0) {
      dispatch({ type: "ADD_UNDERSTANDING", payload: understanding });
      history.push("/support");
    } else {
      // form validation, if the user selects 'none'
      Swal.fire({
        title: "Please select an input value",
      });
    }
  };

  return (
    <>
      <h1>
        How well did you understand the material today? On a scale of 1 - 5
      </h1>
      <Card>
        <InputLabel>Understanding</InputLabel>
        <Select onChange={handleChange} value={understanding}>
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
          onClick={() => handleSubmit(understanding)}
        >
          SUBMIT
        </Button>
      </Card>
    </>
  );
}

export default Understanding;
