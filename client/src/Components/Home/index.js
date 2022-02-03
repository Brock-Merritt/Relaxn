import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import smiles from "../../assets/smiles.gif";

const Home = () => {
  return (
    <main>
      {Auth.loggedIn() ? (
        <>
          <h1 className="main-title">How are you feeling today?</h1>
          <div className="emotion-icon">
            <Link to="/Happy">
              <font size="+4">😊</font>
            </Link>
            <Link to="/Sad">
              <font size="+4">😞</font>
            </Link>
            <Link to="/Stressed">
              <font size="+4">😣</font>
            </Link>
            <Link to="/Angry">
              <font size="+4">😠</font>
            </Link>
            <Link to="/Tired">
              <font size="+4">😴</font>
            </Link>
          </div>
          <div className="emotion-name">
            <div>Happy</div>
            <div>Sad</div>
            <div>Stressed</div>
            <div>Angry</div>
            <div>Tired</div>
          </div>
        </>
      ) : (
        <>
        <h4>Please Login or Signup</h4>
        {/* <h1 className="main-title">How are you feeling today?</h1> */}
         <img className="smiles" src={smiles} alt="smiles"></img>
        </>
      )}
    </main>
  );
};

export default Home;
