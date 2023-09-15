import React from 'react';
import {Snackbar, Alert, Slide} from '@mui/material';
import { useUserAuth } from '../context/userContext';


function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }

const Notifications = () => {


  const {message, openNotifi, setOpenNotifi} = useUserAuth();

  const handleCloseNotifi = (event, reason) => {
    if(reason === "clickaway"){
      return;
    }
    setOpenNotifi(false);
  };

  return (
    <>
       <Snackbar
    anchorOrigin={{ vertical:'bottom', horizontal:'left' }}
    open={openNotifi}
    onClose={handleCloseNotifi}
    TransitionComponent={TransitionRight}
    autoHideDuration={4000}
    >
       <Alert severity={message[1]} 
       sx={{
        width: '100%',
        fontSize:'1rem'
        }}>
       {message[0]}
       </Alert>
    </Snackbar>
    </>
  )
}

export default Notifications;
