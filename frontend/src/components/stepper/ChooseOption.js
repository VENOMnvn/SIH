import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import client from "../../static/client.svg";
import provider from "../../static/provider.svg";
import backg from "../../static/backg.svg";
import lang from "../../utils/lang/chooseOptionLang";
import { useSelector } from "react-redux";

const ChooseOption = () => {
  const [isProvider, setIsProvider] = useState(null);
  const navigate = useNavigate();

  const langKey = useSelector((store) => store.lang.lang);
  console.log(langKey);

  const divOneClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${isProvider === true ? "border-opacity-100 border-sky-600" : ""
    }`;

  const divTwoClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${isProvider === false ? "border-opacity-100 border-sky-600" : ""
    }`;

  useEffect(() => {
    if (isProvider === true) {
      setTimeout(() => { navigate("/signup/provider"); }, 500);
      // Redirect to the login page if isSelected is true
    } else if (isProvider === false) {
      setTimeout(() => { navigate("/signup/client"); }, 500);
      // Redirect to the login page if isSelected is false
    }
  }, [isProvider]);

  return (
    <section className="flex box-border w-full min-h-full items-center justify-between">
      <div className="flex flex-col items-center min-h-full box-border w-full md:w-1/2 gap-y-6">
        <div className="flex flex-col text-left min-h-full box-border w-4/5 md:w-3/4 sm-w-full gap-y-6">
          <div className="flex w-full flex-col gap-y-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              {lang[langKey].how}
            </h1>
            <p className="w-full text-gray-500">
              {lang[langKey].connect}
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
                  {lang[langKey].signLegal}
                </h2>
                <p className=" text-base">{lang[langKey].enhance}</p>
              </div>
            </div>
            <div
              className={divTwoClassNames}
              onClick={() => setIsProvider(false)}
            >
              <img src={client} alt="Client" width="50px" />
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  {lang[langKey].signClient}
                </h2>
                <p className=" text-base">{lang[langKey].look}</p>
              </div>
            </div>
            <div className="w-full py-2 box-border">
              <div className="w-full py-2 px-1 m-0 text-base box-border text-start">
                {lang[langKey].alreadyAccount}{" "}
                <Link
                  className="underline cursor-pointer text-blue-800"
                  to="/login"
                >
                  {lang[langKey].login}
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
