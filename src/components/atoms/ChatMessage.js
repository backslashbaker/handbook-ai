import Markdown from "react-markdown";
import {useEffect} from "react";
function ChatMessage({message, messageFromAi}) {
    useEffect(() => {
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
            link.target = '_blank'
        });
    }, [message])

    return (
        <>

            <div className={messageFromAi ? 'message-from-ai' : 'message-from-user'} data-testid='chat-message'>
                <p><b>{messageFromAi ? 'AI' : 'You'}</b></p>
                <Markdown>{message}</Markdown>
            </div>
        </>
    )
}

export default ChatMessage;