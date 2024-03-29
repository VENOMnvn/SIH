import React from "react";
import backg from "../../static/cover.svg";
import defaultProfile from "../../static/defaultProfile.jpg";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { Button, IconButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import lang from "../../utils/lang/profileLang"
import { useSelector } from "react-redux";

const sessions = [
  {
    day: "TUE",
    date: "03 Oct",
    slots: 5,
    timeSlots: ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  },
  {
    day: "TUE",
    date: "03 Oct",
    slots: 5,
    timeSlots: ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  },
  {
    day: "TUE",
    date: "03 Oct",
    slots: 5,
    timeSlots: ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  },
  {
    day: "TUE",
    date: "03 Oct",
    slots: 5,
    timeSlots: ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  },
  {
    day: "TUE",
    date: "03 Oct",
    slots: 5,
    timeSlots: ["5:30 PM", "5:30 PM", "5:30 PM", "5:30 PM"],
  }
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const [sessionId, setSessionId] = React.useState(0);
  const [timeId, setTimeId] = React.useState(0);

  const langKey = useSelector((store) => store.lang.lang);
  const user = useSelector(state=>state.user);
  console.log(user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    console.log("session: ", sessions[sessionId]);
    console.log("time slots: ", sessions[sessionId].timeSlots[timeId]);
  }

  const style = {
    backgroundColor: "rgba(237, 255, 228, 1)",
    borderRadius: "0.4rem",
    padding: "4px 8px",
    width: "fit-content",
    border: "2px solid #dfdfdf",
  };

  return (
    <div className="flex flex-col w-full pt-0">
      <div className="overflow-hidden h-40">
        <div
          style={{ backgroundImage: `url(${backg})` }}
          className="div-border w-full hidden md:block bg-cover bg-center bg-no-repeat h-screen"
        ></div>
      </div>
      <div className="relative flex flex-col w-full items-center p-4 pt-0">
        <div className="relative flex w-full md:w-4/5">
          <div className="absolute top-[-34px] border-4 border-white rounded-full overflow-hidden">
            <img src={user?.user?.img || defaultProfile} width={"200px"} alt="profile" />
          </div>
          <div className="pl-[14rem] flex flex-col items-start h-[10rem] justify-center">
            <h1 className="text-2xl font-bold">{user.user.name}</h1>
            <p className="">$500/{lang[langKey].hour}</p>
            <p>3.9⭐</p>
          </div>
          <div style={{ flex: 1 }} />
          <ul className="flex gap-x-4 h-[10rem] items-center">
            <li>
              <IconButton>
                <ChatBubbleOutlineRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </li>
            <li>
              <IconButton>
                <MoreHorizRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </li>
          </ul>
        </div>
        <div className="relative flex flex-col w-full md:w-4/5 pt-8 text-sm">
          <div sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label={lang[langKey].overview} {...a11yProps(0)} />
              <Tab label={lang[langKey].review}{...a11yProps(1)} />
              <Tab label={lang[langKey].fees} {...a11yProps(2)} />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-wrap box-border w-full gap-y-4">
              <div className="flex flex-col box-border w-auto lg:w-1/2 text-left lg:pr-2 gap-y-4">
                <div className="py-4">
                  <p className="">
                    {user.proffesion.Details}
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h1 className="text-2xl">{lang[langKey].back}</h1>
                  <div className="flex box-border border-2 rounded-lg lg:w-full">
                    <div className="flex w-1/3 text-md p-4">
                      <ul
                        style={{ color: "grey" }}
                        className="flex flex-col gap-y-7 text-[1rem]"
                      >
                        <li className="pb">{lang[langKey].education}</li>
                        <li className="pb">{lang[langKey].areas}</li>
                        <li className="pb">{lang[langKey].location}</li>
                        <li className="pb">{lang[langKey].fluent}</li>
                        <li className="pb">{lang[langKey].exp} </li>
                      </ul>
                    </div>
                    <div className="flex w-2/3 border-l-2 p-4">
                      <ul className="flex flex-col gap-y-4 text-[0.9rem]">
                        <li style={style}>University of Michigan</li>
                        <li>
                          <ul className="flex gap-x-4">
                            <li style={style}>Child custody</li>
                            <li style={style}>Cyber crime</li>
                          </ul>
                        </li>
                        <li style={style}>Mumbai</li>
                        <li>
                          <ul className="flex gap-x-4">
                            <li style={style}>Hindi</li>
                            <li style={style}>English</li>
                            <li style={style}>Marathi</li>
                          </ul>
                        </li>
                        <li style={style}>5 years</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border w-auto lg:w-1/2 lg:pl-2">
                <div className="flex flex-col border-2 rounded-lg p-6 gap-y-4">
                  <div className="flex flex-col items-start">
                    <p className="font-medium text-lg">{lang[langKey].av}</p>
                    <p className="text-start" style={{ color: "grey" }}>
                      {lang[langKey].book}
                    </p>
                  </div>
                  <div>
                    <ul className="flex gap-2 flex-wrap">
                      {sessions.map((session, index) => {
                        return (
                          <li key={index} onClick={() => setSessionId(index)}>
                            <div
                              style={
                                index === sessionId
                                  ? { borderColor: "black" }
                                  : {}
                              }
                              className="flex flex-col border rounded-lg py-2 px-4 cursor-pointer hover:border-black"
                            >
                              <p className="text-xs">{session.day}</p>
                              <h2 className="font-medium">{session.date}</h2>
                              <p className="text-xs text-blue-700">
                                {session.slots} slots
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex flex-col text-start">
                    <p className="text-[1rem] py-2">{lang[langKey].time}</p>
                    <div className="border-b-2" />
                    <div>
                      <ul className="flex flex-wrap py-2 gap-4">
                        {sessions[sessionId]?.timeSlots?.map((time, index) => {
                          return (
                            <li key={index} onClick={() => setTimeId(index)}>
                              <p
                                style={
                                  index === timeId
                                    ? { borderColor: "black" }
                                    : {}
                                }
                                className="py-2 px-6 rounded-lg border font-medium cursor-pointer hover:border-black"
                              >
                                {time}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="w-full">
                    <Button onClick={handleSubmit} fullWidth size="large" variant="contained">
                      {lang[langKey].session}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Reviews
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Fees structure
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
};

export default Profile;
