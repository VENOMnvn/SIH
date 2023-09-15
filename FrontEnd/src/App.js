import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Notifications from "./components/Notifications";
import { UserAuthProvider } from "./context/userContext";
import StepperComp from "./components/stepper/Stepper";

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
          <Route path="/" element={<StepperComp/>}/>
        </Routes>
      </UserAuthProvider>
    </div>
  );
}

export default App;
