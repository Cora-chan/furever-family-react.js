import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import BasicTextField from "../Inputs/BasicTextField"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    
   // transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
      
    },
  },

  

  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
    
    
    
  },
  paper: {
    width: 260,
    backgroundColor: "#2A2E43",
    padding: theme.spacing(2, 4, 3),
    borderRadius:"30px",
    fontFamily:"Arial"
  },
}));

export default function InvitationModal(props) {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  return (
    <div className={classes.root} ref={rootRef}  >
      <Modal
      BackdropProps={{style: {
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
      },}}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <h2 id="server-modal-title" style={{color:"#ffffff" }}>Invite Sent</h2>
          <p  id="server-modal-description" style={{color:"#ffffff"}}>Invite successfully sent to</p>
          <p  id="server-modal-description" style={{color:"#ffffff"}}></p>
        </div>
      </Modal>
    </div>
  );
}