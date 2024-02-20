import TextInput from "./atoms/TextInput";
import SendButton from "./atoms/SendButton";

function ChatInput() {
    return (
        <div data-testid='chat-input'>
            <TextInput />
            <SendButton />
        </div>
    )
}

export default ChatInput;