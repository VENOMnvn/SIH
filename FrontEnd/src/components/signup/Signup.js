import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress, Button } from "@mui/material";
import React from "react";
import { useUserAuth } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
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

  return error;
};

const Signup = ({handleComplete, completed ,activeStep}) => {
  const { setMessage, setOpenNotifi, backendUrl } =
    useUserAuth();
  const navigate = useNavigate();

  const onSubmit = (values, onSubmitProps) => {
    setMessage(["Submitting", "info"]);
    setOpenNotifi(true);

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

    axios.post(`${backendUrl}/user/signup`, data)
      .then((res) => {
        setOpenNotifi(false);
          setMessage(["Success", "success"]);
          setOpenNotifi(true);
          onSubmitProps.resetForm();
          onSubmitProps.setSubmitting(false);
          handleComplete();
      })
      .catch(err => {
        setOpenNotifi(false);
        setMessage([err?.response?.data?.error || "Unknown error!", "error"]);
        setOpenNotifi(true);
        onSubmitProps.setSubmitting(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-full w-full text-base">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(formik) => {
          // console.log(formik.errors, formik.values);
          return (
            <Form className="container h-fit max-w-sm md:max-w-md px-4 sm:px-8 rounded flex flex-col border border-gray-400">
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
              <div className="w-full py-8 box-border">
                <Button
                  type="submit"
                  size={"large"}
                  fullWidth
                  disabled={
                    !(formik.isValid && formik.dirty) || formik.isSubmitting || completed[activeStep]
                  }
                  variant="contained"
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
                  Signup
                </Button>
              </div>
              <div className="w-full py-2 box-border">
                <div className="w-full py-2 px-1 m-0 text-base box-border text-start">
                  Already have an account?{" "}
                  <Link
                    className="underline cursor-pointer text-blue-800"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Signup;
