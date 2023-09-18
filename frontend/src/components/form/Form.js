import React, { useState } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  UserIcon,
  SparklesIcon,
  CloudArrowUpIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";
import Axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === 0) {
    } else if (activeStep === 1) {
    } else if (activeStep === 2) {
    }

    setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
  };

  const isLastStep = activeStep === 2; // Assuming there are three steps
  const isFirstStep = activeStep === 0;

  // State variables for input data

  const [adharNo, setAdharNo] = useState("");
  const [panNo, setPanNo] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [barCouncilNo, setBarCouncilNo] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [adharImage, setAdharImage] = useState(null);
  const [panImage, setPanImage] = useState(null);
  const [licenseImage, setLicenseImage] = useState(null);
  const [educationalCertificate, setEducationalCertificate] = useState(null);
  
  const [specilization, setSpecilization] = useState("");
  const [experiences, setExperiences] = useState([]);
  const [category, setCategory] = useState("");
  const [bio, setBio] = useState("");
  const [startDate, setStartDate] = useState("");
  const [presentDate, setPresentDate] = useState("");

  const navigate = useNavigate();

  const user = useSelector(state=>state.user);
  console.log(user);
  
  useEffect(()=>{
    if(user.user == false){
      console.log("run");
      navigate('/');
    }
  },[]);

  

  const submitHandlerOne = async (e) => {
    e.preventDefault();
    setActiveStep(1)

    try {
      const response = await Axios.post(
        "http://localhost:4004/api/proffesionalData",
        {
          adharNo,
          panNo,
          licenseNo,
          barCouncilNo,
          officeAddress,
<<<<<<< Updated upstream
          user_id: "6506f685087d5150aff2b1b6",
=======
          user_id : user?.proffesion._id
>>>>>>> Stashed changes
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const changeImageHandlerAdhar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setAdharImage(file);
    };
  };

  const changeImageHandlerPan = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPanImage(file); // Updated to setPanImage
    };
  };

  const changeImageHandlerLicense = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setLicenseImage(file); // Updated to setLicenseImage
    };
  };

  const changeImageHandlerCertificate = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setEducationalCertificate(file); // Updated to setEducationalCertificate
    };
  };

  const submitHandlerTwo = async (e) => {
    e.preventDefault();
    setActiveStep(2)

    const formData = new FormData();
    formData.append("adharImage", adharImage);
    formData.append("panImage", panImage);
    formData.append("licenseImage", licenseImage);
    formData.append("educationalCertificate", educationalCertificate);

    try {
      const response = await Axios.post(
<<<<<<< Updated upstream
        "http://localhost:4004/api/uploadDocs",
        formData,
=======
        "http://localhost:4004/api/proffesionalData",
        {...formData,user_id:user?.proffesion._id},
       
>>>>>>> Stashed changes
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const addExperience = () => {
    const newExperience = {
      category,
      bio,
      startDate,
      presentDate,
    };

    setExperiences([...experiences, newExperience]);
    setCategory("");
    setBio("");
    setStartDate("");
    setPresentDate("");
  };

  const handleSubmitThree = async (event) => {
    event.preventDefault();
    const submittedData = {
      specilization,
      experiences,
    };
<<<<<<< Updated upstream
    try {
      const response = await Axios.post(
        "http://localhost:4004/api/proffesionalData",
        { ...submittedData, user_id: "6506f685087d5150aff2b1b6" }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
=======
      try {

        const response = await Axios.post(
          "http://localhost:4004/api/proffesionalData",
          {...submittedData,user_id:user?.proffesion._id},
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
>>>>>>> Stashed changes
  };

  return (
    <div className="w-full px-24 py-4 mt-5">
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep(0)}>
          <UserIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Personal Details
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <CloudArrowUpIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Documents Upload
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <SparklesIcon className="h-5 w-5" />
          <div className="absolute -bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal"
            >
              Skill Details
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div
        className=" w-[75vw] m-auto mt-20 px-10 pt-20"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          {activeStep === 0 && (
            <Container>
              <form onSubmit={submitHandlerOne}>
                <Grid
                  container
                  rowSpacing={8}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <TextField
                      label="Aadhar No"
                      type="number"
                      variant="outlined"
                      fullWidth
                      name="adharNo"
                      value={adharNo}
                      onChange={(e) => setAdharNo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      label="Pan No"
                      variant="outlined"
                      fullWidth
                      name="panNo"
                      value={panNo}
                      onChange={(e) => setPanNo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      label="License No"
                      variant="outlined"
                      fullWidth
                      name="licenseNo"
                      value={licenseNo}
                      onChange={(e) => setLicenseNo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      label="Bar Council No"
                      variant="outlined"
                      fullWidth
                      name="barCouncilNo"
                      value={barCouncilNo}
                      onChange={(e) => setBarCouncilNo(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      label="Office Address"
                      variant="outlined"
                      fullWidth
                      name="officeAddress"
                      value={officeAddress}
                      onChange={(e) => setOfficeAddress(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <div className="mt-10 flex justify-between mb-5">
                  <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                  </Button>
                  <Button type="submit" disabled={isLastStep}>
                    Next
                  </Button>
                </div>
              </form>
            </Container>
          )}
          {activeStep === 1 && (
            <Container>
              <form onSubmit={submitHandlerTwo}>
                <Grid
                  container
                  rowSpacing={8}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <input
                      required
                      type="file"
                      style={{ display: "none" }}
                      onChange={changeImageHandlerAdhar}
                      id="adhar-input"
                      accept="image/*"
                      name="adharImage"
                    />
                    <label htmlFor="adhar-input">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<ImageIcon />}
                        fullWidth
                      >
                        {adharImage
                          ? "Adhar Image Selected"
                          : "Upload Adhar Image"}
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      required
                      type="file"
                      style={{ display: "none" }}
                      onChange={changeImageHandlerPan}
                      name="panImage"
                      accept="image/*"
                      id="pan-input"
                    />
                    <label htmlFor="pan-input">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<ImageIcon />}
                        fullWidth
                      >
                        {panImage ? "Pan Image Selected" : "Upload Pan Image"}
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      required
                      type="file"
                      style={{ display: "none" }}
                      onChange={changeImageHandlerLicense}
                      accept="image/*"
                      name="licenseImage"
                      id="license-input"
                    />
                    <label htmlFor="license-input">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<ImageIcon />}
                        fullWidth
                      >
                        {licenseImage
                          ? "License Image Selected"
                          : "Upload License Image"}
                      </Button>
                    </label>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      required
                      type="file"
                      style={{ display: "none" }}
                      onChange={changeImageHandlerCertificate}
                      name="educationalCertificate"
                      accept="image/*"
                      id="educational-certificate-input"
                    />
                    <label htmlFor="educational-certificate-input">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<ImageIcon />}
                        fullWidth
                      >
                        {educationalCertificate
                          ? " Educational Certificate Image Selected"
                          : "Upload Educational Certificate Image"}
                      </Button>
                    </label>
                  </Grid>
                </Grid>
                <div className="mt-20 flex justify-between mb-5">
                  <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                  </Button>
                  <Button type="submit" disabled={isLastStep}>
                    Next
                  </Button>
                </div>
              </form>
            </Container>
          )}
          {activeStep === 2 && (
            <Container>
              <form onSubmit={handleSubmitThree}>
                <Grid
                  container
                  rowSpacing={8}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <label>Specialization</label>
                    <Select
                      variant="outlined"
                      fullWidth
                      required
                      value={specilization}
                      onChange={(e) => {
                        setSpecilization(e.target.value);
                      }}
                    >
                      <MenuItem value="Option 1">Option 1</MenuItem>
                      <MenuItem value="Option 2">Option 2</MenuItem>
                      <MenuItem value="Option 3">Option 3</MenuItem>
                    </Select>
                  </Grid>
                  {experiences.map((experience, index) => (
                    <Grid container spacing={2} key={index}>
                      <Grid item xs={12}>
                        <label>Category</label>
                        <Select
                          variant="outlined"
                          fullWidth
                          required
                          value={experience.category}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].category = e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                        >
                          <MenuItem value="Option 1">Option 1</MenuItem>
                          <MenuItem value="Option 2">Option 2</MenuItem>
                          <MenuItem value="Option 3">Option 3</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={12}>
                        <label>Bio</label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          required
                          value={experience.bio}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].bio = e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <label>Start Date</label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          required
                          type="date"
                          value={experience.startDate}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].startDate =
                              e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <label>End Date</label>
                        <TextField
                          variant="outlined"
                          fullWidth
                          required
                          type="date"
                          value={experience.presentDate}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].presentDate =
                              e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                        />
                      </Grid>
                    </Grid>
                  ))}
                  <Grid item xs={6} mb={"20px"}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={addExperience}
                      fullWidth
                    >
                      Add Experience
                    </Button>
                  </Grid>
                  <Grid item xs={6} mb={"20px"}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default MyForm;