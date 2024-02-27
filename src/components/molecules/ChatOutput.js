import ChatMessage from "../atoms/ChatMessage";
import {useEffect} from "react";
import Loading from "../atoms/Loading";

function ChatOutput({messages, loading}) {
    function updateScroll() {
        const element = document.querySelector(".chat-container");
        element.scrollTop = element.scrollHeight;
    }

    useEffect(() => {
        setTimeout(updateScroll, 100);
    }, [messages])

    if (messages) {
        return (
            <div className='chat-container' data-testid='chat-output'>
                {messages.map((message, index) => {
                    return <ChatMessage key={index} message={message.messageText} messageFromAi={message.fromAi} />
                })}
                <Loading isLoading={loading} />
            </div>
        )
    }

    return (
        <div className='chat-container' data-testid='chat-output'>

        </div>
    )
}

export default ChatOutput;