import "./App.css";
import { Route, Routes } from "react-router-dom";
import Notifications from "./components/Notifications";
import { UserAuthProvider } from "./context/userContext";
import ChooseOption from "./components/stepper/ChooseOption";
import Chatbot from "./components/Chatbot";
import NavForLogin from "./components/NavForLogin";
import StepperComp from "./components/stepper/Stepper";
import Signup from "./components/signup/Signup";
import SignupRouter from "./components/SignupRouter";
import Landingpage from "./components/landing/Landingpage";
import Login from "./components/login/Login";
import ChatbotBox from "./components/ChatBox/chatbot";
import Navbar from "./components/navbar/Navbar";   
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <UserAuthProvider>
        <Notifications />
        <Routes>
          <Route path="home" element={<Profile/>}>
            {/* <Route index element={<ChooseOption />} /> */}
          </Route>
          <Route path="/" element={<NavForLogin />}>
            <Route index element={<Landingpage />} />
            <Route path="signup" element={<SignupRouter />}>
              <Route index element={<ChooseOption />} />
              <Route path="provider" element={<StepperComp />} />
              <Route path="client" element={<Signup />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="chat" element={<ChatbotBox/>}></Route>
          <Route path="/footer" element ={<Footer/>}/>
        </Routes>
      </UserAuthProvider>
    </div>
  );
}

export default App;
