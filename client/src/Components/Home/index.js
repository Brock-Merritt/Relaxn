import React from 'react';
import { Link } from "react-router-dom";
import Happy from "../../Pages/Happy/index.js";
import Sad from "../../Pages/Sad/index.js";
import Stressed from "../../Pages/Stressed/index.js";
import Angry from "../../Pages/Angry/index.js";
import Tired from "../../Pages/Tired/index.js";

function Home() {
    return (
        <div>
            <h1 className="main-title">How are you feeling today?</h1>
            <div className="emotion-icon">
                <Link to="/Happy">😊</Link>
                <Link to="/Sad">😞</Link>
                <Link to="/Stressed">😣</Link>
                <Link to="/Angry">😠</Link>
                <Link to="/Tired">😴</Link>
            </div>
            <div className="emotion-name">
                <div>Happy</div>
                <div>Sad</div>
                <div>Stressed</div>
                <div>Angry</div>
                <div>Tired</div>
            </div>
        </div>
    )
}

export default Home;

