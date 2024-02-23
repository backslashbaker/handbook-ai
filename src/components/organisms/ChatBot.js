import ChatInput from "../molecules/ChatInput";
import ChatOutput from "../molecules/ChatOutput";
import {useEffect, useState} from "react";
import softwareEngineerRole from "../../data/preprompts";
import axios from "axios";

function ChatBot() {
    const [chatMessage, setChatMessage] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect( () => {
        if (chatMessage) {
            setMessages((prevMessages) => [...prevMessages, {messageText: chatMessage, fromAi: false}]);
            async function getLmStudioMessage(message=null) {
                const url = 'http://localhost:1234/v1/chat/completions';
                if (!message || typeof message !== 'string') {
                    return Promise.reject(new Error('useLmStudio must receive a message string as an input'));
                }
                try {
                    const response = await axios({
                        method: "POST",
                        url: url,
                        headers: {"Content-Type": "application/json"},
                        data: {
                            "messages": [
                                { "role": "system", "content": `${softwareEngineerRole}` },
                                { "role": "user", "content": `${message}` }
                            ],
                            "temperature": 0.7,
                            "max_tokens": -1,
                            "stream": false
                        }
                    });

                    return Promise.resolve(response.data.choices[0].message.content);
                } catch(error) {
                    return Promise.reject(new Error(error.message));
                }
            }
            getLmStudioMessage(chatMessage).then((res) => setMessages((prevMessages) => [...prevMessages, {messageText: res, fromAi: true}]))
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
