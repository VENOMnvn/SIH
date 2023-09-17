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
import Home from "./components/HomePage/Home";
import MyForm from './components/form/Form';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setNestedObjectValues } from "formik";

function App() {

  const location = useLocation();
  const [canShow,setShow] = useState(true);

  useEffect(()=>{
    console.log(location);
    if(location.pathname.includes('/signup')  || location.pathname.includes('/login') ){
      setShow(false); 
    }
    else{
      setShow(true);
    }
  },[location])


  return (
    <div className="App">
      {canShow && <Navbar></Navbar>}
        
      <UserAuthProvider>
        <Notifications />
        <Routes>
            {/* <Route index element={<ChooseOption s/>} /> */}
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="myForm" element={<MyForm/>}></Route>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="signup" element={<SignupRouter />}>
              <Route index element={<ChooseOption />} />
              <Route path="provider" element={<StepperComp />} />
              <Route path="client" element={<Signup />} />
            </Route>
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="chat" element={<ChatbotBox/>}></Route>
          
        </Routes>
      </UserAuthProvider>
      {canShow && <Footer></Footer>}
      
    </div>
  );
}

export default App;
