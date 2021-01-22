import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Comments() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [comments, setComments] = useState("");

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
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleChange}
        value={comments}
        />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit(comments)}
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Comments;
