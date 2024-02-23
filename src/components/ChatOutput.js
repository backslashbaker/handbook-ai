import ChatMessage from "./atoms/ChatMessage";

function ChatOutput({messages}) {
    if (messages) {
        return (
            <div className='chat-container' data-testid='chat-output'>
                {messages.map((message, index) => {
                    return <ChatMessage key={index} message={message.messageText} messageFromAi={message.fromAi} />
                })}
            </div>
        )
    }

    return (
        <div className='chat-container' data-testid='chat-output'>

        </div>
    )
}

export default ChatOutput;