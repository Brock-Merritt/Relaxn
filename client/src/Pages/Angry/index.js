import React from "react";
import anger from "../../assets/anger.png"
const Angry = () =>  {
    return (
        <>
            <div className="top-row">
                <div className="card">
                    
                </div>
                <div className="card">
                    <div className="card-img-top">
                        <img src={anger} alt="Anger quote" className="anger-img"></img>
                    </div>
                </div>
            </div>
            <div className="bottom-row">
                <div className="card">
                    <div>Insert gif here</div>
                </div>
                <div className="card">
                    <div>Insert music link or video here</div>
                </div>
            </div>
            </>
        )
}

export default Angry;