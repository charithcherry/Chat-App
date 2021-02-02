import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import Modal from './components/LoginForm'


const App=()=>
{

   if(!localStorage.getItem('username')) return <Modal/>
 return(
     <ChatEngine
     height="100vh"
     projectID="0ae31c43-5dfb-4cf8-a5de-a9599106d1c4"
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={ (chatAppProps)=> <ChatFeed {...chatAppProps}/>}
     
     />
 );

}
export default App;