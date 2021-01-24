import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [comments, setComments] = useState("");

  // on change of TextField input, set comments
  // to event.target.value
  const handleChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (comments) => {
    history.push("/review");
    dispatch({ type: "ADD_COMMENTS", payload: comments });
  };

  return (
    <>
      <h1>Would you like to leave any comments for us today?</h1>
      <Card>
        <TextField
          id="outlined-textarea"
          placeholder="Comments"
          multiline
          variant="outlined"
          onChange={handleChange}
          value={comments}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit(comments)}
        >
          SUBMIT
        </Button>
      </Card>
    </>
  );
}

export default Comments;
