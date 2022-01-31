import React from "react";
import breathe from "../../assets/breathe.gif";

const Stressed = () =>  {
    return (
            <>
            <div className="top-row">
                <div className="card">
                    <div>
                        <div>Insert image here</div>
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
                    <div>Insert music link or video here</div>
                </div>
            </div>
    
    {/* how the layout will be once react-bootstrap imports correctly */}
    
            {/* <div>
                <Card>
                    <Card.Img variant="top" src={cute} alt="Puppy and kitten cuddling!" />
                    <Card.Body>Enjoy this picture of a puppy and kitten cuddling!</Card.Body>
                </Card>
                <Card>
                    <Card.Link />
                    <Card.Body>Enjoy this picture of a puppy and kitten cuddling!</Card.Body>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Img variant="top" src={cute} alt="Puppy and kitten cuddling!" />
                    <Card.Body>Enjoy this picture of a puppy and kitten cuddling!</Card.Body>
                </Card>
                <Card>
                    <Card.Link />
                    <Card.Body>Enjoy this picture of a puppy and kitten cuddling!</Card.Body>
                </Card>
            </div> */}
            </>
        )
}

export default Stressed;