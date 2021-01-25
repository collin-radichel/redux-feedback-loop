import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

function Success() {
  const history = useHistory();

  // onClick of 'Back to Start' button
  // bring the user back to / (which is the feeling page)
  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <>
      <h1>Congrats! Click the button below to go back to start.</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSubmit()}
      >
        BACK TO START
      </Button>
    </>
  );
}

export default Success;
