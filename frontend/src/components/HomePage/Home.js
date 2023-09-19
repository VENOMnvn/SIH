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
import { useNavigate } from "react-router-dom";
import lawyer2 from "./Rectangle 25.png"
import lawyer3 from "./Rectangle 28.png"
import { useSelector ,useDispatch} from "react-redux";

// import { useSelector } from "react-redux";


// import { useSelector,useDispatch } from "react-redux";

import lang from "../../utils/lang/homeLang";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { removeUser } from "../../utils/slices/userSlice";

const Home = () => {
  const langKey = useSelector((store) => store.lang.lang);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const dropdown = {
    advocate: [
      lang[langKey].crime,
      lang[langKey].civil,
      lang[langKey].family,
      lang[langKey].property,
      lang[langKey].immi,
      lang[langKey].intel,
      lang[langKey].tax,
      lang[langKey].labour,
      lang[langKey].env,
      lang[langKey].con,
    ],
    legal: [
      lang[langKey].corp,
      lang[langKey].taxc,
      lang[langKey].intelc,
      lang[langKey].famc,
      lang[langKey].comp,
      lang[langKey].real,
    ],
    notary: [
      lang[langKey].notdoc,
      lang[langKey].notaff,
    ],
    mediators: [
      lang[langKey].sermed,
    ],
    arbitrators: [
      lang[langKey].serab,
    ],
  };


  const dispatach = useDispatch();
  const toggleModal = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [field, setField] = React.useState("");
  const [resultToFilter,setresultToFilter] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setField(event.currentTarget.id);
  };
  const handleSearch = (name) => {
    console.log(name+"OK");
    setAnchorEl(null);
  };

  const togglingModal = async (dataOfquery) => {
    console.log(dataOfquery);

    const res = await axios.post('http://localhost:4004/api/filter',dataOfquery);
    console.log(res);
    setresultToFilter(res);
    toggleModal.current.style.display = "flex";
  };
  // const langKey = useSelector((store) => store.lang.lang);

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
              <div className="username">
              {user.user == false ? "Signup/Login" : <div >{user.user.name[0].toUpperCase() + user.user.name.slice(1)}</div>}
              </div>
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
          <div className="homelogo" onClick={()=>dispatach(removeUser())}>
            <div>
              <img src={frame} alt="home icon"></img>
            </div>
            <div className="name">Logout</div>
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
          <ModalContent dataContent={resultToFilter}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
