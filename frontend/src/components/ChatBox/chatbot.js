
import Chatbot from 'react-simple-chatbot';


const ChatbotBox = () => {

    const steps = [
        {
            id:"Main",
            message : "Hello How can i help you",
            trigger : "two"
        },
        {
            id:"two",
            message:"happy to Help you"
        }
    ]


    return (
        <div>
            <Chatbot steps={steps}> </Chatbot>
        </div>
    );
}

export default ChatbotBox;