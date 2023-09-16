import React from "react";
import siteicon from "../static/siteicon.svg";
import { Outlet } from "react-router-dom";
import ChooseOption from "./stepper/ChooseOption";

const NavForLogin = () => {
  return (
    <div className="flex flex-col box-border w-full min-h-full items-center justify-center">
      <nav className="flex z-1 border-2 border-gray-200 border-opacity-50 box-border px-4 md:px-8 fixed top-0 left-0 right-0 bg-white">
        <div>
          <ul className="flex items-center justify-between py-4 px-6">
            <li>
              <img src={siteicon} alt="LeagalServices" />
            </li>
            <li>
              <span className="font-bold text-1.4rem">Legal</span>
              <span className="font-bold text-blue-700 text-1.4rem">Link</span>
            </li>
          </ul>
        </div>
        <div className="flex"></div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default NavForLogin;
