import ChatInput from "../molecules/ChatInput";
import ChatOutput from "../molecules/ChatOutput";
import {useEffect, useState} from "react";

function ChatBot() {
    const [chatMessage, setChatMessage] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if (chatMessage) {
            setMessages((prevMessages) => [...prevMessages, {messageText: chatMessage, fromAi: false}]);
        }
    }, [chatMessage])

    return (
    <div className="ChatBot" data-testid='chat-bot'>
        <ChatOutput messages={messages} />
        <ChatInput setChatMessage={setChatMessage} />
    </div>
    );
}

export default ChatBot;
