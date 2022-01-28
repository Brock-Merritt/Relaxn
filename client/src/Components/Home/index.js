import React from 'react';
import { Link } from "react-router-dom";


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

