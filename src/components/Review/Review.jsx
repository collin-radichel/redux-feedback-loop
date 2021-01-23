import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Review() {
  const history = useHistory();

  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportReducer);
  const comments = useSelector((store) => store.commentsReducer);

  
  const handleSubmit = () => {
    axios
      .post("/feedback", {
        feeling: feeling,
        understanding: understanding,
        support: support,
        comments: comments,
      })
      .then((response) => {
        console.log(response);
        history.push("/success");
      })
      .catch((error) => {
        alert("Error adding feedback to DB!!");
        console.log(error);
      });
  }; //end handleSubmit

  return (
    <>
      <h1>Here is a review of your feedback</h1>
      <h2>Feeling: {feeling}</h2>
      <h2>Understanding: {understanding}</h2>
      <h2>Support: {support}</h2>
      <h2>Comments: {comments}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        SUBMIT
      </Button>
    </>
  );
}

export default Review;
