import TextInput from "../atoms/TextInput";
import SendButton from "../atoms/SendButton";
import {useState} from "react";

function ChatInput({setChatMessage}) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setChatMessage(inputValue);
    }

    return (
        <form onSubmit={handleSubmit} data-testid='chat-input'>
            <TextInput handleChange={handleChange} />
            <SendButton />
        </form>
    )
}

export default ChatInput;