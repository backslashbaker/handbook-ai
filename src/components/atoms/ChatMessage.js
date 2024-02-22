function ChatMessage({message, messageFromAi}) {
    return (
        <div className={messageFromAi ? 'message-from-ai' : 'message-from-user'} data-testid='chat-message'>
            <p>{message}</p>
        </div>
    )
}

export default ChatMessage;