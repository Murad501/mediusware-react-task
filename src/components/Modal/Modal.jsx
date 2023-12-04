// Importing React and useState from React library
import React, { useState } from "react";
import './Modal.scss'

// Functional component named CustomModal
const CustomModal = ({ showModal }) => {
  const handleClose = () => {
    console.log("handleClose");
  };
  // JSX structure for the modal component
  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title">title</h5>
                <button className="close-btn" onClick={handleClose}>
                  &times;
                </button>
              </div>
              <div className="modal-body">children</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
                <button className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Exporting the CustomModal component as the default export
export default CustomModal;
