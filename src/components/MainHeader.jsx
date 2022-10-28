import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSignUpPopUp } from "../components/LoginSignUpPopUp";
import { LoginSignInPopUp } from "../components/LoginSignInPopUp";
import { PortalPopup } from "../components/PortalPopup";
import img1 from "../assets/logo-origina1.jpg";

import { NavLink } from "react-router-dom";

import "./MainHeader.css";

export const MainHeader = () => {
  const navigate = useNavigate();
  const [isSignUpPopUpOpen, setSignUpPopUpOpen] = useState(false);
  const [isSignInPopUpOpen, setSignInPopUpOpen] = useState(false);
  const [isBurgerMenuPopUpOpen, setBurgerMenuPopUpOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const reference = useRef();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFindSupportButtonClick = useCallback(() => {
    navigate("/traderscommunity");
  }, [navigate]);

  const onPartnersButtonClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  const onAboutUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
    reference.current.scrollIntoView({ behavior: "smooth" });
  }, [navigate]);

  const onContactUsButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);
  const donationUsButtonClick = useCallback(() => {
    navigate("/donationpage");
  }, [navigate]);
  const myProfileButtonClick = useCallback(() => {
    navigate("/memberprofile");
  }, [navigate]);

  const openSignUpPopUp = useCallback(() => {
    setSignup(true);
    setSignUpPopUpOpen(true);
  }, []);

  const closeSignUpPopUp = useCallback(() => {
    setSignUpPopUpOpen(false);
  }, []);

  const openSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(true);
  }, []);

  const closeSignInPopUp = useCallback(() => {
    setSignInPopUpOpen(false);
  }, []);

  const openBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(true);
  }, []);

  const closeBurgerMenuPopUp = useCallback(() => {
    setBurgerMenuPopUpOpen(false);
  }, []);
  const [Logout, setLogout] = useState(false);
  const [signup, setSignup] = useState(true);

  const handleLogout = () => {
    setLogout(true);
    setSignup(false);
    localStorage.clear();
    navigate("/");
    window.location.reload();
    
    // setUser(null);
  };

  return (
    <>
      <header className="mainHeader">
        <article
          style={{ height: "30px" }}
          className="logoArticle"
          onClick={onLogoContainerClick}
        ></article>
        <div className="frameDiv">
          <a className="headerNavigations">
            <button
              className="findSupportButton"
              onClick={onFindSupportButtonClick}
            >
              Traders Community
            </button>
            <button className="partnersButton" onClick={onLogoContainerClick}>
              Home
            </button>
            <button className="partnersButton" onClick={onPartnersButtonClick}>
              News
            </button>
            <button className="aboutUsButton" onClick={onAboutUsButtonClick}>
              <a className="aboutSectionButton" href="#aboutTeam">
                {" "}
                Portfolios
              </a>
            </button>
            <button className="contactUsButton" onClick={donationUsButtonClick}>
              Brokers
            </button>
            <button
              className="contactUsButton"
              onClick={onContactUsButtonClick}
            >
              <a className="contactSectionButton" href="#contactform">
                Contact Us{" "}
              </a>
            </button>

            {user ? (
              <button
                className="contactUsButton"
                onClick={myProfileButtonClick}
              >
                My Profile
              </button>
            ) : (
              ""
            )}
          </a>
          <div className="mainCTADiv">
           {user? (""):
            <button className="button" onClick={openSignUpPopUp}>
            <b className="becomeAVolunteer">Sign Up</b>
          </button>}
            {user ? (
              <button className="buttonSignIn" onClick={handleLogout}>
                <label className="signInLabel">Logout</label>
              </button>
            ) : (
              <button className="buttonSignIn" onClick={openSignInPopUp}>
                <label className="signInLabel">Sign In</label>
              </button>
            )}
          </div>
        </div>
      </header>

      {isSignUpPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpPopUp}
        >
          <LoginSignUpPopUp onClose={closeSignUpPopUp} />
        </PortalPopup>
      )}
      {isSignInPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInPopUp}
        >
          <LoginSignInPopUp onClose={closeSignInPopUp} />
        </PortalPopup>
      )}
    </>
  );
};
