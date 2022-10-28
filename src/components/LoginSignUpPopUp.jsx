import { useState, useCallback } from "react";
import { LoginSignInPopUp } from "./LoginSignInPopUp";
import { PortalPopup } from "../components/PortalPopup";
import "./SignupSignUp.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


export const LoginSignUpPopUp = ({ onClose }) => {
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(false);

  // const onFrameButtonClick = useCallback(() => {
  //   // Please sync "LoggedInOptionPopUp" to the project
  // }, []);
    const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const postRequestHandler = async () => {
    const data = { userName, email, password, confirm_password,};
   
   
    const response = await axios.post(
      "http://localhost:5000/signup",
      data,
    );
    
 


    const results = (response.data.token);
    localStorage.setItem("token", results);
   
    
    setMessage(true);
    setUserName("");
    setEmail("");
      setPassword("");
    setConfirmPassword("");
    
   
    
  //   setRepeatPassword("");
  };



  return (
    <>
      <div className="signUpPopUpDiv">
        <h5 className="signupH5">Signup </h5>
        <button className="closeButto" onClick={onClose}>
          <img className="ellipseIcon" alt="" src="ellipse-225.svg" />
          <img className="lineIcon" alt="" src="line-81.svg" />
          <img className="lineIcon1" alt="" src="line-91.svg" />
        </button>
        <div className="signupFrameDiv">
          
            <div className="frameDiv1">
              <div className="frameDiv2">
                <p className="usernameP">Username</p>
                <input
                 onChange={(e) => setUserName(e.target.value)}
                 value={userName}
                  className="rectangleInput"
                  type="text"
                  autoFocus
                />
                   <p className="usernameP">Email</p>
                <input
                 onChange={(e) => setEmail(e.target.value)}
                 value={email}
                  className="rectangleInput"
                  type="text"
                  
                />
                   <p className="usernameP">Password</p>
                <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                  className="rectangleInput"
                  type="password"
                  
                />
                   <p className="usernameP">Confirm Password</p>
                <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirm_password}
                  className="rectangleInput"
                  type="password"
                  
                />
          
              </div>
             
             
            </div>
            <button  className="frameButton" onClick={postRequestHandler }>
              <div className="frameDiv3">
                <p className="sIGNUP">SIGN UP</p>
              </div>
            </button>
            
            {message ? (
              

          
          <div>
          <h5 className="titleMsg">You have successfully Signup</h5>
             <large style={{ color: "#908DB9", marginLeft:"0px" ,fontWeight:"bold", cursor:"pointer", }} onClick={openSignInPopUp}>
          Please Log in
         </large>
         </div>
         ) : (
           ""
         )}
         
        
          
           <button className="frameButton1">
             <button className="frameButton2">
               <div className="groupDiv">
                 <img
                   className="image2Icon"
                   alt=""
                   src="image-2@2x.png"
                 />
                 <p className="signUpWithGoogle">Sign up with Google</p>
               </div>
             </button>
           </button>
         </div>
         <div className="haveAccountLinkDiv">
         </div>
       </div>
       {isSignInPopUpOpen && (
         <PortalPopup
           overlayColor="rgba(144, 141, 185, 0.5)"
           placement="Centered"
           onOutsideClick={closeSignInPopUp}
         >
           <LoginSignInPopUp onClose={closeSignInPopUp} />
         </PortalPopup>
       )}
     </>
   );
 };

