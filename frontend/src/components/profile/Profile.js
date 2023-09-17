import React from "react";
import backg from "../../static/cover.svg";
import profile from "../../static/profile.svg";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { IconButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    backgroundColor: "rgba(237, 255, 228, 1)",
    borderRadius:"0.4rem",
    padding:"4px 8px",
    width:"fit-content"
  }

  return (
    <div className="flex flex-col w-full pb-4">
      <div className="overflow-hidden h-40">
        <div
          style={{ backgroundImage: `url(${backg})` }}
          className="div-border w-full hidden md:block bg-cover bg-center bg-no-repeat h-screen"
        ></div>
      </div>
      <div className="relative flex flex-col w-full items-center">
        <div className="relative flex w-4/5">
          <div className="absolute top-[-34px] border-4 border-white rounded-full overflow-hidden">
            <img src={profile} alt="profile" />
          </div>
          <div className="pl-[14rem] flex flex-col items-start h-[10rem] justify-center">
            <h1 className="text-2xl font-bold">Rashmi Babre</h1>
            <p className="">$500/hour</p>
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
        <div className="relative flex flex-col w-4/5 pt-8 text-sm">
          <div sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
              <Tab label="Fees structure" {...a11yProps(2)} />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0}>
            <div className="flex box-border w-full">
              <div className="box-border w-1/2 text-left">
                <div className="py-4">
                  <p className="">
                    Ms. Rashmi Babre leads as a Design Director at YUJ designs.
                    Her role involves going into depths of User Centred
                    Methodology (UCD), UX principles, life-centric design
                    approach, best practices, design direction, design
                    management and proje…
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="text-2xl">Background</h1>
                  <div className="flex w-full box-border border-2 rounded">
                    <div className="flex w-1/3 text-md p-4">
                      <ul className="flex flex-col gap-y-6">
                        <li>Education</li>
                        <li>Practice areas</li>
                        <li>Location</li>
                        <li>Fluent in</li>
                        <li>Experience </li>
                      </ul>
                    </div>
                    <div className="flex w-2/3 border-l-2 p-4">
                      <ul className="flex flex-col gap-y-4">
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
              <div className="box-border w-1/2"></div>
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
