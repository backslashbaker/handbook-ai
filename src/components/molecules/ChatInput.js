import TextInput from "../atoms/TextInput";
import SendButton from "../atoms/SendButton";
import {useState} from "react";

function ChatInput({setChatMessage}) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            handleSubmit(e);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setChatMessage(inputValue);
        const textArea = document.querySelector('.chat-input textarea');
        textArea.value = '';
        textArea.focus();
    }

    return (
        <form className='chat-input' onSubmit={handleSubmit} data-testid='chat-input'>
            <TextInput handleKeyPress={handleKeyPress} handleChange={handleChange} />
            <SendButton />
        </form>
    )
}

export default ChatInput;