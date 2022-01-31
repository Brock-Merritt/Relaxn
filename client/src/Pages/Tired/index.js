import React from "react";
import sleepy from '../../assets/sleepy.jpg';
import sleepQuote from '../../assets/sleep-quote.jpg';

const Tired = () =>  {
    return (
        <>
            <div className="top-row">
                <div className="card">
                    <div>
                        <img src={sleepy} alt="Counting sheep"></img>
                    </div>
                </div>
                <div className="card">
                    <div>Insert quote here</div>
                </div>
                <div className="card">
                    <div>
                        <img src={sleepQuote} alt="Counting sheep" className="sleep-quote"></img>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <div>Insert gif here</div>
                </div>
                <div className="card">
                <iframe className="bottom-vid" width="560" height="315" src="https://www.youtube.com/embed/o8GrqUSdzi0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Tired;