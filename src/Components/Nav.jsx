import React, { useState } from "react";
import "../Components/Main.css";

function Nav(props) {
  const [light,setLight]=useState(false)
  const [mode,setMode]=useState("Light Mode")
 
  const darkLight=()=>{
    setLight(true)
    props.lightMode(light)
    setMode("Dark Mode")
    
  }
 

  return (
    <div className="header">
      
      <h3>Where are a world?</h3>
      <div className="darkMode"onClick={darkLight}>
        <i className="fa-regular fa-moon"></i>
      {/* { light? <span>Dark Mode</span>:<span  >Light Mode</span>} */}
      {mode? <span>{mode}</span>:null}
      </div>
    </div>
  );
}

export default Nav;
