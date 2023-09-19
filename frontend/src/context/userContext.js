import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {

  const backendUrl = "http://localhost:4004";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState([null, "info"]);
  const [openNotifi, setOpenNotifi] = useState(false);
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  const revokeAccessToken = () => {
    axios.get(`${backendUrl}/user/access`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
      .then((res) => {
        localStorage.setItem("token", res.data?.Token)
        localStorage.setItem("refreshToken", res.data?.refreshToken)
      })
      .catch(err => {
        setLoading(false);
        setMessage([err.response.data, "error"]);
        setOpenNotifi(true);

      });
  }


  useEffect(() => {
    if (token) {
      setLoading(true);
      axios.get(`${backendUrl}/user/verifyToken`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res.data);
          setUser(res.data);
          setLoading(false);
        })
        .catch(err => {
          revokeAccessToken();
        })
    }
  }, [token]);

  return (
    <UserAuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        message,
        openNotifi,
        setMessage,
        setOpenNotifi,
        backendUrl
      }}
    >
      {children}
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};