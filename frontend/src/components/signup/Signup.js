import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress, Button } from "@mui/material";
import React from "react";
import { useUserAuth } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import backg from "../../static/backg.svg";
import axios from "axios";
import backg from "../../static/backg.svg";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validate = (values) => {
  let error = {};
  let usernameRegex = /^\w{4,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  let confirmPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  if (!values.username) {
    error.username = "Required!";
  } else if (!usernameRegex.test(values.username)) {
    error.username = "Username must be of 4 or more characters";
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
  } else if (values.password !== values.confirmPassword) {
    error.password = "Password and confirm password must be same";
    error.confirmPassword = "Password and confirm password must be same";
  }

  return error;
};

const Signup = () => {
  const { setMessage, setOpenNotifi } = useUserAuth();
  const navigate = useNavigate();

  const onSubmit = (values, onSubmitProps) => {
    setMessage(["Submitting", "info"]);
    setOpenNotifi(true);

    console.log(values);

    if (values.password !== values.confirmPassword) {
      setOpenNotifi(false);
      setMessage(["Password and Confirm Password did not match.", "error"]);
      setOpenNotifi(true);
      return;
    }
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    // axios
    //   .post(`${backendUrl}/user/signup`, data)
    //   .then((res) => {
    //     setOpenNotifi(false);
    //     setMessage(["Success", "success"]);
    //     setOpenNotifi(true);
    //     onSubmitProps.resetForm();
    //     onSubmitProps.setSubmitting(false);
    //     handleComplete();
    //   })
    //   .catch((err) => {
    //     setOpenNotifi(false);
    //     setMessage([err?.response?.data?.error || "Unknown error!", "error"]);
    //     setOpenNotifi(true);
    //     onSubmitProps.setSubmitting(false);
    //   });
  };

  return (
    <div className="flex w-full min-h-full items-center justify-between">
      <div className="flex flex-col items-center min-h-full box-border w-full md:w-1/2 gap-y-6 pt-20">
        <div className="flex flex-col text-left min-h-full box-border w-4/5 md:w-3/4 sm-w-full gap-y-6">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(formik) => {
              // console.log(formik?.errors, formik?.values);
              return (
                <Form className="flex flex-col w-full">
                  <div className="flex w-full flex-col pb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                      Tell us about yourself
                    </h1>
                  </div>
                  <div className="flex flex-wrap w-full box-boder py-2">
                    <label className="flex px-1 w-40" htmlFor="username">
                      Username
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
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
                  <div className="flex flex-wrap w-full box-boder py-2">
                    <label className="flex w-40 px-1" htmlFor="email">
                      Email
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
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
                  <div className="flex flex-wrap w-full box-boder py-2">
                    <label className="flex w-40 px-1" htmlFor="password">
                      Password
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
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
                  <div className="flex flex-wrap w-full box-boder py-2">
                    <label className="flex w-40 px-1" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
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
                  <div className="w-full py-8 box-border">
                    <Button
                      type="submit"
                      size={"large"}
                      fullWidth
                      disabled={
                        !(formik?.isValid && formik?.dirty) ||
                        formik?.isSubmitting
                      }
                      variant="contained"
                      startIcon={
                        formik?.isSubmitting ? (
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
                      Signup
                    </Button>
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
  );
};

export default Signup;
