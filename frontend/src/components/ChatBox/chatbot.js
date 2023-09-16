import { Select } from "@mui/material";
import "./chatbot.css";
import chatbotsvg from "./chatbot.svg";
import { useRef, useState ,useEffect } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const ChatbotBox = () => {

  const submitBtn = useRef();
  const navigate = useNavigate();

  const [msgAry, setMsgAry] = useState([
    { sender: "bot", msg: "Hii ! Please Name of Your City"}
  ]);

  const [Stage,setStage] = useState(1);
  
  const TypesOfCases = ["Matrimonial","Property","Family & Inheritance","Criminal","Accident & Insurance","Other"];

  const reply = ()=>{
    var msgContent = "Please Wait";
    var lastmsg = msgAry.at(-1);

    if(Stage == 1){
       msgContent = "Please Select the Type of Dispute"
    }
    if(Stage == 3 ){
      msgContent = "Please Select Experience (in Years) "
    }
    if(Stage >= 4){
      msgContent = "Please Wait..."
      navigate('/')
      
    }

    setTimeout(()=>{
      setMsgAry([...msgAry,{sender:"bot",msg : msgContent }]);
      setStage(Stage+1);
    },1000);
    
    return 
  }

  const submitMsg = ()=>{
     setMsgAry([...msgAry,{sender:"user",msg:submitBtn.current.value}]);   
     submitBtn.current.value = ""
  }
  
  const submitChoice = (ele)=>{
    setStage(Stage+1);
    submitBtn.current.value = ele;
    submitMsg();
  }


  useEffect(()=>{ 
    if(msgAry.at(-1).sender == 'user'){
      reply();
    }
  },[msgAry]);

  return (

    <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden h-[100vh] m-auto">
   
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {msgAry.map((msg) =>
          msg.sender == "bot" ? (
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full ">
                <img src={chatbotsvg} />
              </div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">{msg.msg}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-black text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">{msg.msg}</p>
                </div>
                {
                  // <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                }
              </div>
              {
                // profile
                // <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100" />
              }
            </div>
          )
        )}


        {
          Stage == 2 ? <div className="flex w-full mt-2 space-x-3 max-w-xs flex-wrap">
          {
            TypesOfCases.map((ele)=>(<div className="typesOfCases" onClick={()=>submitChoice(ele)}>
             {ele}
            </div>))
          }
          
        </div> : ""
        }

      </div>

      <div className="bg-white p-4 flex">
        
      <input
          className="flex items-center h-10 w-full  px-3 text-sm rounded-l mt-2"
          type="text"
          placeholder="Type your message…"
          ref={submitBtn}
        />

        <div onClick={submitMsg}>
        <svg
        width="57"
        height="58"
        viewBox="0 0 57 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_123_48500)">
          <g clip-path="url(#clip1_123_48500)">
            <path
              d="M42.4264 29.2262H26.8701"
              stroke="#292929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M42.4264 29.2262L23.3346 38.4186L26.8701 29.2262L23.3346 20.0338L42.4264 29.2262Z"
              stroke="#292929"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_123_48500">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(28.2843 0.941895) rotate(45)"
            />
          </clipPath>
          <clipPath id="clip1_123_48500">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(28.2843 12.2556) rotate(45)"
            />
          </clipPath>
        </defs>
      </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatbotBox;
