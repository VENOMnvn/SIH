import React, { useRef } from "react";
import NavBar from "../navbar/Navbar";
import "./Home.scss";
import './homes.css';
import ChatbotBox from "../ChatBox/chatbot";
import chatbot from './chatbot.svg';
import ModalContent from "../modal/ModalContent";
import homeicon from './home (1).png' 
import messages from "./message-square.png";
import bookings from "./time-outline.png"
import briefcase from "./briefcase_5548926 1.png"
import frame from "./Frame 38.png"
import userimage from "./Frame 26.png"

const Home = () => {
  const toggleModal = useRef();

  const togglingModal = () => {
    toggleModal.current.style.display = "flex";
  }



  return (<div className="Homepage">


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
    <div className="left">
<div class="box">
  <div className="data">
    <div className="img" ><img src={userimage} alt="userimage"></img></div>
    <div className="user">
  <div className="username">User Name</div>
  <div className="profile">View Profile</div>
  </div>
  </div>
  <div className="homelogo">
    <div><img src={homeicon} alt="home icon"></img> 
    </div>
    <div className="name" style={{color:"blue"}}>Home</div>

  </div>
  <div className="homelogo">
    <div><img src={messages} alt="home icon"></img> 
    </div>
    <div className="name">Messages</div>

  </div>
  <div className="homelogo">
    <div><img src={bookings} alt="home icon"></img> 
    </div>
    <div className="name">Bookings</div>

  </div>
  <div className="homelogo">
    <div><img src={briefcase} alt="home icon"></img> 
    </div>
    <div className="name">Cases</div>

  </div>
  <div className="homelogo">
    <div><img src={frame} alt="home icon"></img> 
    </div>
    <div className="name">More</div>

  </div>
 
</div>
    </div>
    <div className="center"></div>
    <div className="right">
      <div className="chatboxtitle"><img src={chatbot} /> Gobot</div>
      <ChatbotBox idea={togglingModal}></ChatbotBox></div>

    <div className="modalRedirect" ref={toggleModal} onClick={() => { toggleModal.current.style.display = "none" }}>
      <div className="modalContain">
        <ModalContent />

      </div>
    </div>
  </div>
  );
};

export default Home;
