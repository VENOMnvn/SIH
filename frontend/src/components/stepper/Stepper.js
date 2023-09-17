import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  Button,
  CircularProgress,
  Typography,
  LinearProgress,
} from "@mui/material";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import backg from "../../static/backg.svg";
import { useUserAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import lang from "../../utils/lang/stepperLang";
import { useSelector } from "react-redux";


const StepperComp = () => {
  const langKey = useSelector((store) => store.lang.lang);
  const steps = [
    "Personal Details",
    "Other Details",
    "Skill Details",
    "Assignment",
  ];
  // const categoryOptions = ["Option 1", "Option 2", "Option 3"];

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_no: "",
    dob: "",
    location: "",
    language: "",
    occupation: "",
    category: "",
    experience: "",
    barNo: "",
    extra: ''
  };

  const validate = (values) => {
    let error = {};
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let confirmPasswordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    let phone_noRegex = /^[0-9]{10}$/;
    let dobRegex = /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/;

    if (!values.username) {
      error.username = lang[langKey].required
    }

    if (!values.email) {
      error.email = lang[langKey].required;
    } else if (!emailRegex.test(values.email)) {
      error.email = "Invalid email format";
    }

    if (!values.password) {
      error.password = lang[langKey].required;
    } else if (!passwordRegex.test(values.password)) {
      error.password =
        "Min 8 char including at least one uppercase, one lowercase, one digit and may include one special char!";
    }

    if (!values.confirmPassword) {
      error.confirmPassword = lang[langKey].required;
    } else if (!confirmPasswordRegex.test(values.confirmPassword)) {
      error.confirmPassword =
        "Min 8 char including at least one uppercase, one lowercase, one digit and may include one special char!";
    } else if (values.password !== values.confirmPassword) {
      error.password = "Password and confirm password must be same";
      error.confirmPassword = "Password and confirm password must be same";
    }

    if (!values.phone_no) {
      error.phone_no = lang[langKey].required;
    } else if (!phone_noRegex.test(values.phone_no)) {
      error.phone_no = "Phone number must be of 10 digits";
    }

    if (!values.dob) {
      error.dob = lang[langKey].required;
    } else if (!dobRegex.test(values.dob)) {
      error.dob = "Date must be in correct dd/mm/yyyy format";
    }

    if (!values.location) {
      error.location = lang[langKey].required;
    }

    if (!values.language) {
      error.language = lang[langKey].required;
    }
    if (!values.occupation) {
      error.occupation = lang[langKey].required;
    }
    if (!values.category) {
      error.category = lang[langKey].required;
    }
    if (!values.experience) {
      error.experience = lang[langKey].required;
    }
    if (!values.barNo) {
      error.barNo = lang[langKey].required;
    }

    return error;
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };


  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [progress, setProgree] = useState(0);
  const { setMessage, setOpenNotifi } = useUserAuth();

  const navigate = useNavigate()

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const onSubmit = (values, onSubmitProps) => {
    setMessage(["Submitting", "info"]);
    setOpenNotifi(true);

    console.log("Complete Data:", values);
    setTimeout(() => {
      onSubmitProps.resetForm();
      onSubmitProps.setSubmitting(false);
      navigate('/home');
    }, 3000);
  };

  useEffect(() => {
    setProgree(activeStep * 25);
  }, [activeStep]);

  return (
    <div className="flex flex-col box-border w-full min-h-full items-center justify-between">
      <div className="w-full fixed top-0">
        <LinearProgress
          sx={{ height: "6px" }}
          variant="determinate"
          value={progress}
        />
      </div>
      <div className="flex w-full min-h-full items-center justify-between">
        <div className="flex flex-col items-center min-h-full box-border w-full md:w-1/2 gap-y-6 pt-20">
          <div className="flex flex-col text-left min-h-full box-border w-4/5 md:w-3/4 sm-w-full gap-y-6">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={validate}
            >
              {(formik) => {
                console.log(formik.errors);
                return (
                  <Form className="flex flex-col w-full gap-y-4">
                    <TabPanel value={activeStep} index={0}>
                      <div className="flex w-full flex-col pb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                          {lang[langKey].tell}
                        </h1>
                      </div>
                      <div className="flex flex-wrap w-full box-boder py-2">
                        <label
                          className="flex px-1 pt-2 w-40"
                          htmlFor="username"
                        >
                          {lang[langKey].username}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="username"
                          name="username"
                          autoComplete="off"
                          placeholder={lang[langKey].username}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="username" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder py-2">
                        <label className="flex w-40 px-1 pt-2" htmlFor="email">
                          {lang[langKey].email}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="pb-2 flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="off"
                          placeholder={lang[langKey].email}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="email" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="password"
                        >
                          {lang[langKey].password}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="pb-2 flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="password"
                          id="password"
                          name="password"
                          autoComplete="off"
                          placeholder={lang[langKey].password}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="password" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="confirmPassword"
                        >
                          {lang[langKey].confirm}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          autoComplete="off"
                          placeholder={lang[langKey].confirm}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="confirmPassword" />
                        </span>
                      </div>
                    </TabPanel>
                    <TabPanel value={activeStep} index={1}>
                      <div className="flex w-full flex-col pb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                          {lang[langKey].tell}
                        </h1>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex px-1 pt-2 w-40"
                          htmlFor="phone_no"
                        >
                          {lang[langKey].phoneno}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="tel"
                          id="phone_no"
                          name="phone_no"
                          autoComplete="off"
                          placeholder={lang[langKey].phoneno}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="phone_no" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label className="flex w-40 px-1 pt-2" htmlFor="dob">
                          {lang[langKey].dob}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="dob"
                          name="dob"
                          autoComplete="off"
                          placeholder="10/09/2003"
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="dob" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="location"
                        >
                          {lang[langKey].location}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="location"
                          name="location"
                          autoComplete="off"
                          placeholder="Noida, Delhi"
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="location" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="language"
                        >
                          {lang[langKey].languages}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="language"
                          name="language"
                          autoComplete="off"
                          placeholder="English, Hindi"
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="language" />
                        </span>
                      </div>
                    </TabPanel>
                    <TabPanel value={activeStep} index={2}>
                      <div className="flex w-full flex-col pb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                          {lang[langKey].tell}
                        </h1>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex px-1 pt-2 w-40"
                          htmlFor="occupation"
                        >
                          {lang[langKey].occupation}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="occupation"
                          name="occupation"
                          autoComplete="off"
                          placeholder={lang[langKey].occupation}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="occupation" />
                        </span>
                      </div>

                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="category"
                        >
                          {lang[langKey].category}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="category"
                          name="category"
                          autoComplete="off"
                          placeholder={lang[langKey].category}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="category" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label
                          className="flex w-40 px-1 pt-2"
                          htmlFor="experience"
                        >
                          {lang[langKey].experience}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="experience"
                          name="experience"
                          autoComplete="off"
                          placeholder={lang[langKey].experience}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="experience" />
                        </span>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label className="flex w-40 px-1 pt-2" htmlFor="exper">
                          {lang[langKey].barno}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="barNo"
                          name="barNo"
                          autoComplete="off"
                          placeholder={lang[langKey].barno}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="exper" />
                        </span>
                      </div>
                    </TabPanel>
                    <TabPanel value={activeStep} index={3}>
                      <div className="flex w-full flex-col pb-6">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                          {lang[langKey].tell}
                        </h1>
                      </div>
                      <div className="flex flex-wrap w-full box-boder md:py-2">
                        <label className="flex px-1 pt-2 w-40" htmlFor="extra">
                          {lang[langKey].extra}
                        </label>
                        <Field
                          style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                          className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                          type="text"
                          id="extra"
                          name="extra"
                          autoComplete="off"
                          placeholder={lang[langKey].barno}
                        />
                        <br></br>
                        <span className="w-full text-end text-sm px-2 text-red-800">
                          <ErrorMessage name="extra" />
                        </span>
                      </div>
                      {/* <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="email">
                        Email
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="password">
                        Password
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label
                        className="flex w-40 px-1 pt-2"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="off"
                        placeholder="Confirm Password"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="confirmPassword" />
                      </span>
                    </div> */}
                    </TabPanel>
                    <div className="w-full py-2 box-border">
                      {allStepsCompleted() ? (
                        <React.Fragment>
                          Content for when all steps are completed
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Button
                              color="inherit"
                              startIcon={<ArrowBackIosNewIcon />}
                              disabled={activeStep === 0}
                              disableRipple
                              onClick={handleBack}
                            >
                              {lang[langKey].back}
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            {activeStep === totalSteps() - 1 ? (
                              <Button
                                sx={{ backgroundColor: "black" }}
                                variant="contained"
                                type="submit"
                                disabled={
                                  !(formik.isValid && formik.dirty) ||
                                  formik.isSubmitting
                                }
                                startIcon={
                                  formik.isSubmitting ? (
                                    <CircularProgress
                                      style={{
                                        color: "rgba(0, 0, 0, 0.26)",
                                        width: "1rem",
                                        height: "1rem",
                                      }}
                                    />
                                  ) : (
                                    ""
                                  )
                                }
                              >
                                Finish
                              </Button>
                            ) : (
                              <p
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "2px 1.6rem",
                                  cursor: "pointer"
                                }}
                                onClick={handleComplete}
                              >
                                {lang[langKey].continue}
                              </p>
                            )}
                          </Box>
                        </React.Fragment>
                      )}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${backg})` }}
          className="flex flex-col items-center box-border w-1/2 hidden md:block bg-cover bg-center bg-no-repeat h-screen"
        ></div>
      </div>
    </div>
  );
};

export default StepperComp;

