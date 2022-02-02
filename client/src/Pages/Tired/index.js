import React from "react";
import sleepQuote from '../../assets/sleep-quote.jpg';
import stars from '../../assets/stars.png'

const Tired = () =>  {
    return (
        <>
            <div className="top-row">
                <div className="card">
                    <img src={stars} alt="Shimmering stars" className="stars"></img>
                </div>
                <div className="card">
                    <div>
                        <img src={sleepQuote} alt="Tired minds" className="sleep-quote"></img>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <iframe className="counting-sheep" src="https://giphy.com/embed/l3q2ICbdSmDqnlxC0" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animation-fun-loop-l3q2ICbdSmDqnlxC0"></a></p>
                </div>
                <div className="card">
                    <iframe className="bottom-vid" width="560" height="315" src="https://www.youtube.com/embed/o8GrqUSdzi0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Tired;