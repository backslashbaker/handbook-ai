import './App.css';
import Header from './components/Header';
import ChatInput from "./components/ChatInput";
import ChatOutput from "./components/ChatOutput";
import {useEffect, useState} from "react";

function App() {
    const [chatMessage, setChatMessage] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (chatMessage) {
            setMessages((prevMessages) => [...prevMessages, {messageText: chatMessage, fromAi: false}]);
        }
    }, [chatMessage])

    return (
    <div className="App">
        <Header />
        <ChatOutput messages={messages} />
        <ChatInput setChatMessage={setChatMessage} />
    </div>
    );
}

export default App;
