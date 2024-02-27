import '../../assets/App.css';
import ChatBot from "../organisms/ChatBot";

function App() {

    return (
    <main className="App">
        <ChatBot />
        <p className='info'>Ask a local Large Language Model AI questions about the Made Tech Handbook. Please be aware answers may not be accurate!</p>
    </main>
    );
}

export default App;
