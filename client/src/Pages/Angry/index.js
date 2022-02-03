import React from "react";
import anger from "../../assets/anger.png"
import angry from "../../assets/angry.gif"
const Angry = () =>  {
    return (
        <>
            <div className="top-row">
                <div className="card">
                <img className="angry" src={angry} alt="that bird"></img>   
                </div>
                <div className="card">
                    <div className="card-img-top">
                        <img src={anger} alt="Anger quote" className="anger-img"></img>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                {/* <div className="card">
                    <div>Insert gif here</div>
                </div> */}
                <div className="card">
                <iframe className="bottom-vid" width="960" height="415" src="https://funhtml5games.com?embed=angrybirds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
           
            </>
        )
}

export default Angry;