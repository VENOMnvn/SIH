import React from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/lang/footerLang";

export default function Footer() {
  const langKey = useSelector((store) => store.lang.lang);
  return (
    <>
      <footer className="relative bg-gray-300 pt-9 pb-6 mt-56">



        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                {lang[langKey].touch}
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                {lang[langKey].find}
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    {lang[langKey].useful}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation">{lang[langKey].aboutus}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com">{lang[langKey].blog}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial">{lang[langKey].github}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free">{lang[langKey].free}
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    {lang[langKey].other}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">{lang[langKey].mit}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms">{lang[langKey].terms}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy">{lang[langKey].privacy}
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us">{lang[langKey].contact}
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                {lang[langKey].copyright}
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Creative Tim
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}