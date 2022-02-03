import React, { useState } from "react";
import "./Modal.css";

export default function ModalSecondary() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="navbar-item">
        1-800-950-NAMI (6264)
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Who is NAMI?</h2>
            <p>
            "NAMI, the National Alliance on Mental Illness, is the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness. NAMI provides advocacy, education, support and public awareness so that all individuals and families affected by mental illness can build better lives. Call the NAMI Helpline at 800-950-NAMI Or in a crisis, text "NAMI" to 741741. 
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>

        </div>
      )}
      {/* <p>"What goes here?"</p> */}
    </>
  );
}