import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress, Button } from "@mui/material";
import React from "react";
import { useUserAuth } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

const initialValues = {
  username: "",
  password: "",
};

const validate = (values) => {

  let error = {};

  if (!values.username) {
    error.email = "Required!";
  }
  if (!values.password) {
    error.password = "Required!";
  }

  return error;
}

const Login = () => {
  const { setMessage, setOpenNotifi, backendUrl, setUser} =
    useUserAuth();
  const navigate = useNavigate();

  const onSubmit = (values, onSubmitProps) => {
    setMessage(["Logging in...", "info"]);
    setOpenNotifi(true);

    const data = {
      username: values.username,
      password: values.password,
    };

    axios
      .post(`${backendUrl}/user/login`, data)
      .then((res) => {
        setOpenNotifi(false);
        setUser({username: res.data?.username, email:res.data?.email});
        if (res?.data?.token) localStorage.setItem("token", res.data.token);
        if(res?.data?.refreshToken) localStorage.setItem("refreshToken", res.data.refreshToken);
        setMessage(["Success", "success"]);
        setOpenNotifi(true);
        onSubmitProps.resetForm();
        onSubmitProps.setSubmitting(false);
        navigate("/");
      })
      .catch((err) => {
        console.log("err ",err);
        setOpenNotifi(false);
        setMessage([err?.response?.data?.reason || "Unknown error!", "error"]);
        setOpenNotifi(true);
        onSubmitProps.setSubmitting(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-full w-full text-base p-2.5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(formik) => {
          return (
            <Form className="container h-fit max-w-sm px-4 sm:px-8 rounded flex flex-col border border-gray-400">
              <div className="flex flex-col item-center justify-center w-full py-8 font-semibold text-lg">
                <p>
                  <LockOutlinedIcon />
                </p>
                <p>Login</p>
              </div>
              <div className="flex flex-wrap w-full box-boder md:py-2">
                <label className="flex px-1 py-2 w-40" htmlFor="username">
                  Username
                </label>
                <Field
                  className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-2 focus:border-2 focus:outline-none focus:border-blue-500"
                  autoFocus
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
                <label className="flex w-40 px-1 py-2" htmlFor="password">
                  Password
                </label>
                <Field
                  className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-2 focus:border-2 focus:outline-none focus:border-blue-500"
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
              <div className="w-full py-8 box-border">
                <Button
                  type="submit"
                  size={"large"}
                  fullWidth
                  disabled={
                    !(formik.isValid && formik.dirty) || formik.isSubmitting
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
                  Login
                </Button>
              </div>
              <div className="w-full py-2 box-border">
                <div className="w-full py-2 px-1 m-0 text-base box-border text-start">
                  Don't have an account?{" "}
                  <Link
                    className="underline cursor-pointer text-blue-800"
                    to="/signup"
                  >
                    Signup
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

export default Login;
