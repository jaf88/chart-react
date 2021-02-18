import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="4f2503d1-1d8f-48cb-9fa2-8591054a2420"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}

export default App;
