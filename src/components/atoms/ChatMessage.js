function ChatMessage({message}) {
    return (
        <div data-testid='chat-message'>
            <p>{message}</p>
        </div>
    )
}

export default ChatMessage;