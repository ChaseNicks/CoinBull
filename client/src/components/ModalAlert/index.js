import React from "react";
import { Link } from "react-router-dom";
import "./styles/ModalAlert.css";

const ModalAlert = ({ isActive, handleCloseAlert }) => {
  return (
    <div className="container is-fluid">
      <div className={`${isActive ? "modal" : "modal is-active"}`}>
        <div className="modal-background" onClick={handleCloseAlert}></div>
        <div className="modal-card custom-modal-card">
          <header className="modal-card-head">
            <p className="">You must be logged in to add favorites.</p>
            <button className="close-modal-button" aria-label="close" onClick={handleCloseAlert}>&times;</button>
          </header>

          <footer className="modal-card-foot">
            <Link className="is-size-5 sign-in modal-link-button" to="/login">
              Sign In
            </Link>
            <Link className="is-size-5 sign-up modal-link-button" to="/signup">
              Sign Up
            </Link>
            {/* <button className="is-size-5 button modal-link-button" onClick={handleCloseAlert}>
              Cancel
            </button> */}
          </footer>
        </div>
      </div>
    </div>

  );
};

export default ModalAlert;
