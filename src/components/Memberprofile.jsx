import React, { Profiler, useEffect, useState } from "react";
import axios from "axios";

import FileBase64 from "react-file-base64";
import MemberProfilePost from "../components/MemberProfilePost";


const Memberprofile = () => {
const user = JSON.parse(localStorage.getItem("profile"));
const userName =  JSON.parse(localStorage.getItem("profile")).userName;


  // useEffect(() => {
  //   window.location.reload()
  // }, []);
  
  const [openButtom, setOpenButtom] = useState(false);

  const handlingbuttom = () => {
    setOpenButtom(current => !current);
  };
  return (
    <div>
      <h1>{userName}</h1>
    <button onClick={handlingbuttom} >buttom</button>
    {openButtom && <MemberProfilePost />}
    </div>
    

  )
  
};


    


            
  
   
export default Memberprofile