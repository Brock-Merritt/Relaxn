import React from "react";
import dance from '../../assets/dance.gif';
import sunflower from '../../assets/sunflower.gif';

const Happy = () =>  {
    return (
        <>
            <div className="top-row">
            <div className="card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="card">
            <div className="card">
                <img src={sunflower} alt="Growing sunflower" className="sunflower"></img>
            </div>    
            </div>
                <div className="card">
                    <div className="affirmation">I am..
                        <ul>
                            <li>✭ happy</li>
                            <li>✭ strong</li>
                            <li>✭ confident</li>
                            <li>✭ healthy</li>
                            <li>✭ loved</li>
                            <li>✭ grateful</li>
                            <li>✭ excited for today!</li>
                        </ul></div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <img className="dance" src={dance} alt="Happy dance"></img>
                </div>
                <div className="card">
                    <iframe className="bottom-vid" width="560" height="315" src="https://www.youtube.com/embed/eH3giaIzONA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Happy;