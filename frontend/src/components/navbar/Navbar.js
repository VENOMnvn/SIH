import React from "react";
import siteicon from "../../static/siteicon.svg";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="flex z-1 border-2 border-gray-200 border-opacity-50 box-border p-4 md:px-8  top-0 left-0 right-0 bg-white">
      <div className="flex w-full">
        <ul onClick={() => navigate('/')} className="flex items-center justify-between pr-6 cursor-pointer" style={{minWidth:"9.4rem"}}>
          <li>
            <img src={siteicon} alt="LegalServices" width={"33px"}/>
          </li>
          <li>
            <span className="font-bold text-1.4rem">Legal</span>
            <span className="font-bold text-blue-700 text-1.4rem">Link</span>
          </li>
        </ul>
        <Button
          sx={{ color: "black" }}
          endIcon={<ExpandMoreRoundedIcon fontSize="large" />}
        >
          English
        </Button>
        <ul className="flex items-center justify-between px-6 gap-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer" style={{minWidth:"4rem"}}>Legal aid</li>
        </ul>
        <div style={{flex:1}}></div>
        <div
          component="form"
          style={{
            border: "1.5px solid #cfd1d5",
            borderRadius: "0.6rem",
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon color="info" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for names, services, titles"
            inputProps={{ "aria-label": "Search for names, services, titles" }}
          />
        </div>
        <div style={{flex:1}}></div>
        <ul className="flex gap-4 px-4">
          <li>
            <IconButton aria-label="delete">
              <NotificationsNoneRoundedIcon sx={{ color: "#595a5a" }} />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="delete">
              <ChatBubbleOutlineRoundedIcon sx={{ color: "#595a5a" }} />
            </IconButton>
          </li>
          <li></li>
        </ul>
        {
          true ? <Button><Link to="/signup">Signup</Link></Button> : 
          <div className="flex gap-x-4">
          <Avatar className="cursor-pointer">L</Avatar>
          <button style={{ color: "black", background:"rgb(227 232 240)", borderRadius:"0.6rem" , padding:"0 1rem", minWidth:"8rem"}}>Get a match</button>
        </div>
        }
        
      </div>
      <div className="flex"></div>
    </nav>
  );
};

export default Navbar;
