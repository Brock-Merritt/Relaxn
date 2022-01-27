import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div id="page-container">
            <h1 className="main-title">How are you feeling today?</h1>
            <div className="emotion-icon">
                <Link to="/happy">😊</Link>
                <Link to="/sad">😞</Link>
                <Link to="/stressed">😣</Link>
                <Link to="/angry">😠</Link>
                <Link to="/tired">😴</Link>
            </div>
            <div class="emotion-name">
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

