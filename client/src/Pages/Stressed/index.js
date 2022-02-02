import React from "react";
import breathe from "../../assets/breathe.gif";
import chill from "../../assets/calm.jpg";

const Stressed = () =>  {
    return (
            <>
            <div className="top-row">
                <div className="card">
                    <div>
                        <img src={breathe} alt="Inhale - Exhale meditation" className="breathe"></img>
                    </div>
                </div>
                <div className="card">
                    <div className="break-time">Take a break! You deserve it.</div>
                </div>
                <div className="card">
                    <img src={chill} alt="Relaxing Stacked Stones" className="chill"></img>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <div>
                        <div class="prioritize">Prioritize! Use this <a href="https://caseylister.github.io/taskinator/" target="_blank">to do list </a>to keep track of what needs to be done! And always remember to prioritize YOURSELF!</div>
                    </div>
                </div>
                <div className="card">
                <iframe width="660" height="415" src="https://www.youtube.com/embed/UfcAVejslrU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Stressed;