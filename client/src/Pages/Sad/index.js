import React from "react";
import cute from '../../assets/sad.jpg';

const Sad = () => {
    return(
        <>
        <div className="top-row">
            <div className="card">
                <div className="card-img-top">
                    <img  src={cute} alt="Cute puppy and kitten" className="emotion-img"></img>
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

export default Sad;