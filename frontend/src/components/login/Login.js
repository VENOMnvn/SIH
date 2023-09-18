import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CircularProgress, Button } from "@mui/material";
import React from "react";
import { useUserAuth } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import backg from "../../static/backg.png";
import { useSelector ,useDispatch } from "react-redux";
import lang from "../../utils/lang/loginLang";
import { addUser,addProffesion } from "../../utils/slices/userSlice";

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
};



const Login = () => {
  const { setMessage, setOpenNotifi, backendUrl, setUser } = useUserAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const langKey = useSelector((store) => store.lang.lang);

  const onSubmit = (values, onSubmitProps) => {
    setMessage(["Logging in...", "info"]);
    setOpenNotifi(true);

    const data = {
      email: values.username,
      password: values.password,
    };

    axios
      .post(`${backendUrl}/api/login`, data)
      .then((res) => {
        console.log(res);
        setOpenNotifi(false);
        
        if(res.data.isLogin){

          dispatch(addUser(res.data.user));
          dispatch(addProffesion(res.data.proffesional));

        }else{
          alert("Login Failed Check Email or password or try sometime later");
        }

        if(res?.data?.token) localStorage.setItem("token", res.data.token);
        if(res?.data?.refreshToken && res.data.isLogin)
          localStorage.setItem("refreshToken", res.data.refreshToken);
        setMessage(["Success", "success"]);
        setOpenNotifi(true);
        onSubmitProps.resetForm();
        onSubmitProps.setSubmitting(false);
        navigate("/");
      })
      .catch((err) => {
        console.log("err ", err);
        setOpenNotifi(false);
        setMessage([err?.response?.data?.reason || "Unknown error!", "error"]);
        setOpenNotifi(true);
        onSubmitProps.setSubmitting(false);
      });
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
              return (
                <Form className="flex flex-col w-full">
                  <div className="flex w-full flex-col pb-6">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                      {lang[langKey].continue}
                    </h1>
                  </div>
                  <div className="flex flex-wrap w-full box-boder md:py-2">
                    <label className="flex px-1 w-40" htmlFor="username">
                      {lang[langKey].username}
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                      className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-2 focus:border-2 focus:outline-none focus:border-blue-500"
                      autoFocus
                      type="text"
                      id="username"
                      name="username"
                      autoComplete="off"
                      placeholder={lang[langKey].username}
                    />
                    <br></br>
                    <span className="w-full text-end text-sm px-2 text-red-800">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                  <div className="flex flex-wrap w-full box-boder md:py-2">
                    <label className="flex w-40 px-1" htmlFor="password">
                      {lang[langKey].password}
                    </label>
                    <Field
                      style={{ backgroundColor: "rgba(227, 230, 234, 1)" }}
                      className="flex-1 appearance-none h-10 border box-border border-gray-400 rounded px-3 py-2 focus:border-2 focus:outline-none focus:border-blue-500"
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
                      {lang[langKey].login}
                    </Button>
                  </div>
                  <div className="w-full py-2 box-border">
                    <div className="w-full py-2 px-1 m-0 text-base box-border text-start">
                      {lang[langKey].noaccount}{" "}
                      <Link
                        className="underline cursor-pointer text-blue-800"
                        to="/signup"
                      >
                        {lang[langKey].signup}
                      </Link>
                    </div>
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

export default Login;
