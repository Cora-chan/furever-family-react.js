import React from 'react';
import "./background.css"
import ContainedButtonLargeFB from "../components/Buttons/ContainedButtonLargeFB"
import {} from "@material-ui/core"



function Splash() {
  return (

    
    <div style={{position:"fixed",width:"100%", height:"100%"}}>
      
      <img src={require("./family_sample.png")} style={{height:"100%",width:"135%"}} alt=""/>
      <div style={{position: "fixed",color:"#ffffff",top:"30%",left:"32%",fontSize:"50px",fontFamily:"Arial"}}>
        furever</div>
      <span style={{position: "fixed",color:"#ffffff",top:"37%",left:"34%",fontSize:"50px",fontFamily:"Arial"}}>family</span>
      <span style={{position: "absolute",color:"#ffffff",top:"60%",left:"5%",fontWeight:"bold",fontFamily:"Arial"}}>The best way to share your care of your pet.</span>
      <span style={{position: "absolute",color:"#ffffff",top:"63%",left:"35%",fontWeight:"bold",fontFamily:"Arial"}}>Let's get started!</span>
      <span style={{position: "absolute",color:"#ffffff",top:"75%",left:"34%",fontFamily:"Arial"}}>CONTINUE WITH:</span>
      <span style={{position: "absolute",color:"#ffffff",top:"80%",left:"12%"}}>
      <ContainedButtonLargeFB caption="akshdfkjas" />
      
      </span>
    </div>
   

  );
}

export default Splash;