import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';


const App=()=>
{
 return(
     <ChatEngine
     height="100vh"
     projectID="0ae31c43-5dfb-4cf8-a5de-a9599106d1c4"
     userName="jmaster"
     userSecret="123123"
     renderChatFeed={ (chatAppprops)=> <ChatFeed {...chatAppprops}/>}
     
     />
 );

}
export default App;