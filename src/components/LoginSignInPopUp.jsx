import { useState, useCallback } from "react";
import { LoginSignUpPopUp } from "../components/LoginSignUpPopUp";
import { PortalPopup } from "../components/PortalPopup";
import  "./LoginSignin.css";
import {useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginSignInPopUp = ({ onClose }) => {
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [error, setError] = useState([]);

  const openSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);


  const navigate = useNavigate();
    const postRequestLogin = async () => {
      
        try {

        const API = axios.create({ baseURL: "http://localhost:5000" });



    API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).res.tokenId
          }`;
          
        }
        return req;
      });


      const data = {email, password};
      
        const response = await API.post("/login",
        data);
       
        
        const token = response.data.token
        // const error = response.data.status.error
        // const message = response.data.status.message

        //   // return success
        //   if (response.status === 200 || response.status === 201) {
        //     return response;
        //   }
        
        
        
        console.log("login",response.data.result.userName);
        const userName = response.data.result.userName
        localStorage.setItem("profile", JSON.stringify({ userName,token }));
        
        setMessage(true);
      setError(true);
      setEmail([]);
        setPassword("");
        onClose();
     navigate("/memberprofile");
     window.location.reload();
    }
    catch (error) {
        console.log("errr",error.response.data.msg);
        setError(error.response.data.msg);
    }
    };
    
    


  return (
    <>
    
      <div className="signInPopUpDiv">
        <article className="loginWholeArticle">
          <div className="loginSignupLinkDiv" >
            <p className="dontHaveAccount">{`Don’t have account? `}</p>
            <button className="signUpButton" onClick={openSignUpPopUp}>
              Sign up
            </button>
          </div>
          <div className="loginFrameDiv" id="LoginForm">
            <div className="usernameDiv">
              <div className="passwordDiv">
              <h4>{error}</h4>
                <div className="usernameFillDiv">
                  <p className="dontHaveAccount">Email</p>
                  <input style={{backgroundColor:"white"}} onChange={(e) => setEmail(e.target.value)} className="frameInput" type="text" autoFocus />
                </div>
                <div className="usernameFillDiv">
                  <p className="dontHaveAccount">Password</p>
                  <input style={{backgroundColor:"white"}} onChange={(e) => setPassword(e.target.value)} className="frameInput" type="password" />
                </div>
                <div className="rememberMeDiv">
                  <input
                    className="btnCheckInput"
                    type="checkbox"
                    defaultChecked={true}
                  />
                  
                  <p className="rememberMeP">Remember me</p>
                  <a className="forgotPassword" target="_blank">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button onClick={postRequestLogin} className="buttonLogin" id="Login Button">
                <div style={{backgroundColor:"#292825"}} className="frameDiv">
                  <p className="lOGINP">LOG IN</p>
                </div>
              </button>
              {message ? (
          
         
          <h3 style={{ color: "green" }}>Data inserted successfully!</h3>
        ) : (
          ""
        )}
            </div>
            <p className="oRP">OR</p>
            <button className="buttonLogin">
              <button className="frameButton">
                <div className="groupDiv">
                  <img
                    className="image2Icon"
                    alt=""
                    src="image-2@2x.png"
                  />
                  <p className="continueWithGoogle">
                    Continue with Google
                  </p>
                </div>
              </button>
            </button>
          </div>
          <button className="closeButton" onClick={onClose}>
            <img className="ellipseIcon" alt="" src="ellipse-2251.svg" />
            <img className="lineIcon" alt="" src="line-82.svg" />
            <img className="lineIcon1" alt="" src="line-92.svg" />
          </button>
          <h4 className="loginOrSignup">{`Login or Signup `}</h4>
        </article>
      </div>
      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(144, 141, 185, 0.6)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
