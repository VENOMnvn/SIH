import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";
import Axios from "axios";

const MyForm = () => {
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

  const submitHandlerOne = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post(
        "http://localhost:4004/api/proffesionalData",
        {
          adharNo,
          panNo,
          licenseNo,
          barCouncilNo,
          officeAddress,
          user_id : '6506f685087d5150aff2b1b6'
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  const changeImageHandlerAdhar = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
      setAdharImage(file);
    };
  };
  
  const changeImageHandlerPan = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
      setPanImage(file); // Updated to setPanImage
    };
  };
  
  const changeImageHandlerLicense = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
      setLicenseImage(file); // Updated to setLicenseImage
    };
  };
  
  const changeImageHandlerCertificate = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onloadend = () => {
      setEducationalCertificate(file); // Updated to setEducationalCertificate
    };
  };
  
  const submitHandlerTwo = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("adharImage", adharImage);
    formData.append("panImage", panImage);
    formData.append("licenseImage", licenseImage);
    formData.append("educationalCertificate", educationalCertificate);
  
    try {
      const response = await Axios.post(
        "http://localhost:4004/api/proffesionalData",
        formData,
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
      try {
        const response = await Axios.post(
          "http://localhost:4004/api/proffesionalData",
          {...submittedData,user_id:"6506f685087d5150aff2b1b6"},
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center"></div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Add Details
                  </h2>
                  <p className="leading-relaxed">Enter your correct Details</p>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justifyContent="center" alignItems="center">
              <Container>
                <form onSubmit={submitHandlerOne}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Aadhar No"
                        variant="outlined"
                        fullWidth
                        name="adharNo"
                        value={adharNo}
                        onChange={(e) => setAdharNo(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Pan No"
                        variant="outlined"
                        fullWidth
                        name="panNo"
                        value={panNo}
                        onChange={(e) => setPanNo(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="License No"
                        variant="outlined"
                        fullWidth
                        name="licenseNo"
                        value={licenseNo}
                        onChange={(e) => setLicenseNo(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
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
                        label="Office Address"
                        variant="outlined"
                        fullWidth
                        name="officeAddress"
                        value={officeAddress}
                        onChange={(e) => setOfficeAddress(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        // disabled={loading}
                      >
                        Add details
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>
              {/* Your Sidebar component */}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center"></div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Upload Documents
                  </h2>
                  <p className="leading-relaxed">
                    Upload your correct Documents
                  </p>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container justifyContent="center" alignItems="center">
              <Container>
                <form onSubmit={submitHandlerTwo}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" type="submit">
                        Upload Documents
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ minWidth: "1232px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center"></div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Add Experience
                  </h2>
                  <p className="leading-relaxed">Add your past Experience</p>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid justifyContent="center" alignItems="center">
              <Container>
                <form onSubmit={handleSubmitThree}>
                  <Grid container spacing={2}>
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
                              updatedExperiences[index].category =
                                e.target.value;
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
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={addExperience}
                        fullWidth
                      >
                        Add Experience
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
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
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default MyForm;
