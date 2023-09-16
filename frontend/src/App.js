import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Notifications from "./components/Notifications";
import { UserAuthProvider } from "./context/userContext";
import ChooseOption from "./components/stepper/ChooseOption";

import Chatbot from "./components/Chatbot";

import NavForLogin from "./components/NavForLogin";
import StepperComp from "./components/stepper/Stepper";
import Signup from "./components/signup/Signup";
import SignupRouter from "./components/SignupRouter";
import Landingpage from "./components/landing/Landingpage";
import ChatbotBox from "./components/ChatBox/chatbot";


const LazySignup = lazy(() => import("./components/signup/Signup"));
const LazyLogin = lazy(() => import("./components/login/Login"));

function App() {
  return (
    <div className="App">
      <UserAuthProvider>
        <Notifications />
        <Routes>
          <Route
            path="login"
            element={
              <Suspense fallback="Loading...">
                <LazyLogin />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback="Loading...">
                <LazySignup />
              </Suspense>
            }
            />

          <Route
            path="stepper"
            element={
              <Suspense fallback="Loading...">
             {
              //  <LazyStepper />
             }
              </Suspense>
            }
          />

          <Route path="chatbot" element={<Chatbot />} />
          <Route path="/" element={<ChooseOption />} />

<Route path="/" element={<NavForLogin/>}>
<Route index element={<Landingpage/>}/>
<Route path="signup" element={<SignupRouter/>}>
  <Route index element={<ChooseOption/>}/>
  <Route path="provider" element={<StepperComp/>}/>
  <Route path="client" element={<Signup/>}/>
</Route>
</Route>
<Route path="/chat" element={<ChatbotBox></ChatbotBox>}></Route>
        </Routes>
      </UserAuthProvider>
    </div>
  );
}

export default App;