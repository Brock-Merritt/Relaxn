import React from "react";
import sleepQuote from '../../assets/sleep-quote.jpg';
import sheep from '../../assets/sheep.gif'


const Tired = () =>  {
    return (
        <>
            <div className="top-row">
                <div className="card">
                    <img src={sheep} alt="Counting Sheep" className="counting-sheep"></img>
                </div>
                <div className="card">
                    <div>
                        <img src={sleepQuote} alt="Tired minds" className="sleep-quote"></img>
                    </div>
                </div>
            </div>
            <div className="video">
                <div className="card">
                    <iframe width="810" height="540" src="https://www.youtube.com/embed/o8GrqUSdzi0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Tired;