import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function SendButton() {
    return (
        <button type='submit' title='send' data-testid='send-button'>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

export default SendButton;