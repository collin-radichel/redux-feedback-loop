import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from "sweetalert2";

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  // store the data from reducers in variables using useSelector
  const feeling = useSelector((store) => store.feelingReducer);
  const understanding = useSelector((store) => store.understandingReducer);
  const support = useSelector((store) => store.supportReducer);
  const comments = useSelector((store) => store.commentsReducer);

  // function to run when submit feedback button is clicked.
  const handleSubmit = () => {
    // fires sweetalert2 onClick and gives you the option
    // to select 'Save' or 'Don't Save'
    Swal.fire({
      title: "Do you want to save this as your feedback?",
      text: `Feeling: ${feeling}
        Understanding: ${understanding}
        Support: ${support}
        Comments: ${comments}`,
      showDenyButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        // 'Save' sends an axios post request and populates the database
        Swal.fire("Saved!", "", "success");
        axios
          .post("/feedback", {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments,
          })
          .then((response) => {
            console.log(response);
            dispatch({ type: "CLEAR" });
            history.push("/success");
          })
          .catch((error) => {
            alert("Error adding feedback to DB!!");
            console.log(error);
          });
      } else if (result.isDenied) {
        // 'Don't Save' takes you back to the review page
        //  with your data still in the reducers
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }; //end handleSubmit

  // render a review of all of the answers given
  // on previous pages
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
        SUBMIT FEEDBACK
      </Button>
    </>
  );
}

export default Review;
