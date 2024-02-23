import ChatInput from "../molecules/ChatInput";
import ChatOutput from "../molecules/ChatOutput";
import {useEffect, useState} from "react";
import axios from "axios";
import softwareEngineerRole from "../../data/preprompts";

function ChatBot() {
    const [chatMessage, setChatMessage] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if (chatMessage) {
            setMessages((prevMessages) => [...prevMessages, {messageText: chatMessage, fromAi: false}]);
        }
    }, [chatMessage])

    return (
    <div className="ChatBot">
        <ChatOutput messages={messages} />
        <ChatInput setChatMessage={setChatMessage} />
    </div>
    );
}

export default ChatBot;
