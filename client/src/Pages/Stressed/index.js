import React from "react";
import breathe from "../../assets/breathe.gif";

const Stressed = () =>  {
    return (
            <>
            <div className="top-row">
                <div className="card">
                    <div>
                        <div class="prioritize">Prioritize! Use this <a href="https://caseylister.github.io/taskinator/" target="_blank">to do list </a>to keep track of what needs to be done! And always remember to prioritize YOURSELF!</div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img src={breathe} alt="Inhale - Exhale meditation"></img>
                    </div>
                </div>
                <div className="card">
                    <div>Insert quote here</div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <div>Insert gif here</div>
                </div>
                <div className="card">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UfcAVejslrU?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </>
        )
}

export default Stressed;