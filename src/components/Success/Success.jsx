import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button'

function Success () {

    const history = useHistory();

    const handleSubmit = () => {
        history.push('/')
    }

    return (
        <>
        <h1>Congrats!  Click the button below to go back to the Home page</h1>
        <Button onClick={() => handleSubmit()}>BACK TO START</Button>
        </>
    )
}

export default Success;