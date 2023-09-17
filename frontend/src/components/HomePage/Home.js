import React, { useRef } from "react";
import NavBar from "../navbar/Navbar";
import "./Home.scss";
import ChatbotBox from "../ChatBox/chatbot";
import chatbot from './chatbot.svg';
import ModalContent from "../modal/ModalContent";

const Home = () => {
   const toggleModal = useRef();

   const togglingModal = ()=>{
       toggleModal.current.style.display = "flex";
   }

   

  return (  <div className="Homepage">
         
         
          <div className="top">
           <div>
           Advocates
           </div>

           <div>
            Legal Consultant
           </div>

           <div>
            Notaries
           </div>


           <div>
           Mediators
           </div>

           <div>
           Arbitrators
           </div>
          </div>
          <div className="left"></div>   
          <div className="center"></div>   
          <div className="right">
          <div className="chatboxtitle"><img src={chatbot}/> Chatbot</div>
          <ChatbotBox idea={togglingModal}></ChatbotBox></div>

          <div className="modalRedirect" ref={toggleModal} onClick={()=>{toggleModal.current.style.display = "none"}}>
          <div className="modalContain"> 
          <ModalContent/>
          
          </div>
          </div>
    </div>
  );
};

export default Home;
