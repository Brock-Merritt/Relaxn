import React from 'react';

function Home() {
    return (
        <div id="page-container">
            <h1 className="main-title">How are you feeling today?</h1>
            <Row class="emotion-icon">
                <Link to="/happy">😊</Link>
                <Link to="/sad">😞</Link>
                <Link to="/stressed">😣</Link>
                <Link to="/angry">😠</Link>
                <Link to="/tired">😴</Link>
            </Row>
            <Row class="emotion-name">
                <Col sm={2}>Happy</Col>
                <Col sm={2}>Sad</Col>
                <Col sm={2}>Stressed</Col>
                <Col sm={2}>Angry</Col>
                <Col sm={2}>Tired</Col>
            </Row>
        </div>
    )
}

export default Home;

