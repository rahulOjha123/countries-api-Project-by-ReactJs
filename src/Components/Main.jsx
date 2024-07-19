import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryList from "../Components/CountryList";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Components/Main.css"
import CountryDetail from "./CountryDetail";

function Main() {

  const [lightData,setLightData]=useState(false)
 

  const lightMode=()=>{

      setLightData(true)
      console.log(true)
      

  }

  return (
    <div className={lightData?"dark":"main-div"}>
      <BrowserRouter>
        <Nav lightMode={lightMode} />
        <Routes>
          <Route path="/" element={<CountryList lightData={lightData} />}></Route>
          <Route path="/country/:id"element={<CountryDetail lightData={lightData} />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default Main;
