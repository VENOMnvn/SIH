import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import client from "../../static/client.svg";
import provider from "../../static/provider.svg";
import backg from "../../static/backg.svg";
import NavForLogin from "../NavForLogin";

const ChooseOption = () => {
  const [isProvider, setIsProvider] = useState(null);
  const navigate = useNavigate();

  const divOneClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${
    isProvider === true ? "border-opacity-100 border-sky-600" : ""
  }`;

  const divTwoClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${
    isProvider === false ? "border-opacity-100 border-sky-600" : ""
  }`;

  useEffect(() => {
    if (isProvider === true) {
      setTimeout(() => {navigate("/signup/provider");}, 500);
       // Redirect to the login page if isSelected is true
    } else if (isProvider === false) {
      setTimeout(() => {navigate("/signup/client");}, 500);
       // Redirect to the login page if isSelected is false
    }
  }, [isProvider]);

  return (
    <section className="flex box-border w-full min-h-full items-center justify-between">
      <div className="flex flex-col items-center min-h-full box-border w-full md:w-1/2 gap-y-6">
        <div className="flex flex-col text-left min-h-full box-border w-4/5 md:w-3/4 sm-w-full gap-y-6">
          <div className="flex w-full flex-col gap-y-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              How do you want to use LegalLink?
            </h1>
            <p className="w-full text-gray-500">
              Connect with our community of 1000+ legal service provider and
              users
            </p>
          </div>
          <div className="flex flex-col w-full gap-y-4">
            <div
              className={divOneClassNames}
              onClick={() => setIsProvider(true)}
            >
              <img src={provider} alt="provider" width="50px" />
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Sign up as a Legal service provider
                </h2>
                <p className=" text-base">Enhance your Visibility</p>
              </div>
            </div>
            <div
              className={divTwoClassNames}
              onClick={() => setIsProvider(false)}
            >
              <img src={client} alt="Client" width="50px" />
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Sign up as a Client
                </h2>
                <p className=" text-base">Look for legal advice and lawyers</p>
              </div>
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
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${backg})` }}
        className="flex flex-col items-center box-border w-1/2 hidden md:block bg-cover bg-center bg-no-repeat h-screen"
      ></div>
    </section>
  );
};

export default ChooseOption;
