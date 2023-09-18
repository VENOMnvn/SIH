import React, { useRef } from "react";
import "./Home.scss";
import "./homes.css";
import ChatbotBox from "../ChatBox/chatbot";
import chatbot from "./chatbot.svg";
import ModalContent from "../modal/ModalContent";
import homeicon from "./home (1).png";
import messages from "./message-square.png";
import bookings from "./time-outline.png";
import briefcase from "./briefcase_5548926 1.png";
import frame from "./Frame 38.png";
import userimage from "./Frame 26.png";
import vector from "./Vector.png";
import lawyer from "./Rectangle 19.png";
import lawyer2 from "./Rectangle 25.png"
import lawyer3 from "./Rectangle 28.png"
import { useSelector ,useDispatch} from "react-redux";

// import { useSelector } from "react-redux";

import lang from "../../utils/lang/homeLang";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const dropdown = {
  advocate: [
    "Criminal Lawyers",
    "Civil Lawyers",
    "Family Lawyers",
    "Property Lawyers",
    "Immigration Lawyers",
    "Intellectual Property Lawyers",
    "Tax Lawyers",
    "Labour Lawyers",
    "Enviromental Lawyers",
    "Consumer Lawyers",
  ],
  legal: [
    "Corporate Legal Consultants",
    "Tax Consultants",
    "Intellectual Property Consultants",
    "Family Law Consultants",
    "Compilance Consultants",
    "Real Estate Consultants",
  ],
  notary: ["Notaries for Document Verification", "NOtaries for Affidavits"],
  mediators: ["Mediation Services"],
  arbitrators: ["Arbitration Services"],
};

const Home = () => {
  const toggleModal = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [field, setField] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setField(event.currentTarget.id);
  };
  const handleSearch = (name) => {
    console.log(name);
    setAnchorEl(null);
  };

  const togglingModal = () => {
    toggleModal.current.style.display = "flex";
  };
  const langKey = useSelector((store) => store.lang.lang);

  return (
    <div className="Homepage">
      <div className="top">
        <Button
          style={{ textTransform: "none" }}
          id="advocate"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {lang[langKey].advocates}
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="legal"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {lang[langKey].legal}
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="notary"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {lang[langKey].notary}
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="mediators"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {lang[langKey].mediators}
        </Button>
        <Button
          style={{ textTransform: "none" }}
          id="arbitrators"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {lang[langKey].arbitrators}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => setAnchorEl(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {dropdown[field]?.map((name, index) => {
            return (
              <MenuItem key={index} onClick={() => handleSearch(name)}>
                {name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
      <div className="left">
        <div class="box">
          <div className="data">
            <div className="img">
              <img src={userimage} alt="userimage"></img>
            </div>
            <div className="user">
              <div className="username">User Name</div>
              <div className="profile">{lang[langKey].view}</div>
            </div>
          </div>
          <div className="homelogo">
            <div>
              <img src={homeicon} alt="home icon"></img>
            </div>
            <div className="name" style={{ color: "blue" }}>
              {lang[langKey].home}
            </div>
          </div>
          <div className="homelogo">
            <div>
              <img src={messages} alt="home icon"></img>
            </div>
            <div className="name">{lang[langKey].messages}</div>
          </div>
          <div className="homelogo">
            <div>
              <img src={bookings} alt="home icon"></img>
            </div>
            <div className="name">{lang[langKey].bookings}</div>
          </div>
          <div className="homelogo">
            <div>
              <img src={briefcase} alt="home icon"></img>
            </div>
            <div className="name">{lang[langKey].cases}</div>
          </div>
          <div className="homelogo">
            <div>
              <img src={frame} alt="home icon"></img>
            </div>
            <div className="name">{lang[langKey].more}</div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="upper">
          <div className="wel" style={{ color: "#000000" }}>
            {lang[langKey].welcome}
          </div>
          <div className="session">
            {lang[langKey].youhave}{" "}
            <span style={{ color: "#414BF4" }}>{lang[langKey].upcoming}</span>
          </div>
        </div>
        <div className="mid">
          <div className="book">{lang[langKey].book}</div>
          <div className="ses">{lang[langKey].browse}</div>
          <div className="button">
            <button>
              {lang[langKey].start}{" "}
              <img src={vector} className="vector" alt="myimg"></img>
            </button>
          </div>
        </div>
        <div className="last">
          <div className="head">{lang[langKey].connect}</div>
          <div className="all">
            <div className="lawyer">
              <img src={lawyer} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "#414BF4" }}>97 sessions</span>
                </div>
                <p>Criminal Lawyer, 5+ yrs exp</p>
                <p>Hindi, Bangla</p>
                <p>3.9</p>
              </div>
            </div>
            <div className="lawyer">
              <img src={lawyer2} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "#414BF4" }}>97 sessions</span>
                </div>
                <p>Criminal Lawyer, 5+ yrs exp</p>
                <p>Hindi, Bangla</p>
                <p>3.9</p>
              </div>
            </div>
            <div className="lawyer">
              <img src={lawyer3} className="image-law" alt="myimg"></img>
              <div className="datas">
                <div className="nam">
                  Jaydee Devine{" "}
                  <span style={{ color: "#414BF4" }}>97 sessions</span>
                </div>
                <p>Criminal Lawyer, 5+ yrs exp</p>
                <p>Hindi, Bangla</p>
                <p>3.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="chatboxtitle">
          <img src={chatbot} alt="myimg" /> {lang[langKey].gobot}
        </div>
        <ChatbotBox idea={togglingModal}></ChatbotBox>
      </div>

      <div
        className="modalRedirect"
        ref={toggleModal}
        onClick={() => {
          toggleModal.current.style.display = "none";
        }}
      >
        <div className="modalContain">
          <ModalContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
