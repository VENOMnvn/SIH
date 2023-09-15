import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";

const steps = [
  "Personal Details",
  "Other Details",
  "Skill Details",
  "Assignment",
];
const categoryOptions = ["Option 1", "Option 2", "Option 3"];

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
};

const validate = (values) => {
  let error = {};
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let confirmPasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  if (!values.username) {
    error.username = "Required!";
  }

  if (!values.email) {
    error.email = "Required!";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Invalid email format";
  }

  if (!values.password) {
    error.password = "Required!";
  } else if (!passwordRegex.test(values.password)) {
    error.password =
      "Min 8 char including at least one uppercase, one lowercase, one digit and may include one special char!";
  }

  if (!values.confirmPassword) {
    error.confirmPassword = "Required!";
  } else if (!confirmPasswordRegex.test(values.confirmPassword)) {
    error.confirmPassword =
      "Min 8 char including at least one uppercase, one lowercase, one digit and may include one special char!";
  }

  if (!values.phone_no) {
    error.phone_no = "Required!";
  }

  if (!values.dob) {
    error.dob = "Required!";
  }

  if (!values.location) {
    error.location = "Required!";
  }

  if (!values.language) {
    error.language = "Required!";
  }
  if (!values.occupation) {
    error.occupation = "Required!";
  }
  if (!values.category) {
    error.category = "Required!";
  }
  if (!values.experience) {
    error.experience = "Required!";
  }
  if (!values.barNo) {
    error.barNo = "Required!";
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

const StepperComp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);
  const [completed, setCompleted] = useState({});

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

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleSubmit = (values) => {
    const newFormData = { ...formData, ...values };
    setFormData(newFormData);
    console.log("Complete Data:", formData);
  };

  return (
    <div className="flex justify-center items-center w-full text-base p-2.5 pt-6">
      <div className="w-full">
        <Stepper className="py-4" nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step
              sx={{ flexDirection: "column" }}
              key={label}
              completed={completed[index]}
            >
              <StepButton color="inherit" onClick={handleStep(index)}>
                <StepLabel sx={{ flexDirection: "column" }}> {label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div className="flex justify-center items-center h-full w-full text-base">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validate={validate}
          >
            {(formik) => {
              return (
                <Form className="container h-fit max-w-sm md:max-w-md px-4 sm:px-8 rounded flex flex-col border border-gray-400">
                  <TabPanel value={activeStep} index={0}>
                    <div className="flex flex-col item-center justify-center w-full py-8 font-semibold text-lg">
                      <p>
                        <LockOutlinedIcon />
                      </p>
                      <p>Signup</p>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex px-1 pt-2 w-40" htmlFor="username">
                        Username
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="off"
                        placeholder="Username"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="username" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
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
                    </div>
                  </TabPanel>
                  <TabPanel value={activeStep} index={1}>
                    <div className="flex flex-col item-center justify-center w-full py-8 font-semibold text-lg">
                      <p>
                        <LockOutlinedIcon />
                      </p>
                      <p>Signup</p>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex px-1 pt-2 w-40" htmlFor="phone_no">
                        Phone No.
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="phone_no"
                        name="phone_no"
                        autoComplete="off"
                        placeholder="Phone No."
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="phone_no" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="dob">
                        Date Of Birth
                      </label>
                      <Field
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
                      <label className="flex w-40 px-1 pt-2" htmlFor="location">
                        Location
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="location"
                        name="location"
                        autoComplete="off"
                        placeholder="noida,delhi"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="location" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="language">
                        Languages
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="language"
                        name="language"
                        autoComplete="off"
                        placeholder="english,hindi"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="language" />
                      </span>
                    </div>
                  </TabPanel>
                  <TabPanel value={activeStep} index={2}>
                    <div className="flex flex-col item-center justify-center w-full py-8 font-semibold text-lg">
                      <p>
                        <LockOutlinedIcon />
                      </p>
                      <p>Signup</p>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label
                        className="flex px-1 pt-2 w-40"
                        htmlFor="occupation "
                      >
                        Occupation
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="occupation "
                        name="occupation "
                        autoComplete="off"
                        placeholder="Occupation"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="occupation" />
                      </span>
                    </div>

                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="category">
                        Category
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="category"
                        name="category"
                        autoComplete="off"
                        placeholder="category"
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
                        Experience
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="experience"
                        name="experience"
                        autoComplete="off"
                        placeholder="experience"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="experience" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex w-40 px-1 pt-2" htmlFor="exper">
                        Bar Number
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="barNo"
                        name="exper"
                        autoComplete="off"
                        placeholder="Bar N"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="exper" />
                      </span>
                    </div>
                  </TabPanel>
                  <TabPanel value={activeStep} index={3}>
                    {/* <div className="flex flex-col item-center justify-center w-full py-8 font-semibold text-lg">
                      <p>
                        <LockOutlinedIcon />
                      </p>
                      <p>Signup</p>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
                      <label className="flex px-1 pt-2 w-40" htmlFor="username">
                        Username
                      </label>
                      <Field
                        className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-1.5 focus:border-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="username"
                        name="username"
                        autoComplete="off"
                        placeholder="Username"
                      />
                      <br></br>
                      <span className="w-full text-end text-sm px-2 text-red-800">
                        <ErrorMessage name="username" />
                      </span>
                    </div>
                    <div className="flex flex-wrap w-full box-boder md:py-2">
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
                  <div className="w-full py-8 box-border">
                    {allStepsCompleted() ? (
                      <React.Fragment>
                        {/* Content for when all steps are completed */}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Box
                          sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                        >
                          <Box sx={{ flex: "1 1 auto" }} />
                          {activeStep !== steps.length &&
                            (completed[activeStep] ? (
                              <p>Already completed</p>
                            ) : completedSteps() === totalSteps() - 1 ? (
                              <Button type='submit'
                              >FINISH</Button>
                            ) : (
                              <Button onClick={handleComplete}>NEXT</Button>
                            ))}
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
    </div>
  );
};

export default StepperComp;
