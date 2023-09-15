import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ChooseOption = () => {
  const [isSelected, setIsSelected] = useState(null);
  const navigate = useNavigate()
  const handleButtonClick = () => {
    if (isSelected === true) {
        navigate('/stepper'); // Redirect to the login page if isSelected is true
    //   console.log("lawyer");
    } else if (isSelected === false) {
    //   console.log("client");
        navigate('/signup'); // Redirect to the login page if isSelected is false
    }
  };
//   console.log(isSelected)
  const divOneClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${isSelected === true ? 'border-opacity-100 border-sky-600' : ''}`;
  const divTwoClassNames = `p-4 flex border-2 cursor-pointer border-gray-200 border-opacity-50 rounded-lg ${isSelected === false ? 'border-opacity-100 border-sky-600' : ''}`;
  return (
    
    <section className="text-gray-600 body-font max-w-xl ml-20">
      <div className="container px-5 py-24 mx-auto ">
        <div className="  flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            How do you want to use HackerRank?
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            We’ll personalize your setup experience accordingly.
          </p>
        </div>
        <div className="flex flex-wrap flex-col sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-6 space-y-6">
          <div className={divOneClassNames} onClick={() => setIsSelected(true)}>
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Service Provider
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy.
              </p>
            </div>
          </div>
          <div className={divTwoClassNames} onClick={() => setIsSelected(false)}>
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Client
              </h2>
              <p class="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy
              </p>
            </div>
          </div>
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleButtonClick}>Create Account</button> 
      </div>
    </section>
  );
};

export default ChooseOption;
