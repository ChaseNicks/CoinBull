import React from "react";
import { Link } from "react-router-dom";

const ModalAlert = ({ isActive, handleCloseAlert }) => {
  return (
    <div className={`${isActive ? "modal" : "modal is-active"}`}>
      <div className="modal-background" onClick={handleCloseAlert}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={handleCloseAlert}></button>
        </header>

        <section className="modal-card-body">
          You must be logged in to add favorites.
        </section>

        <footer className="modal-card-foot">
          <Link to="/login">
            Log In
          </Link>
          <Link to="/signup">
            Sign Up
          </Link>
          <button className="button" onClick={handleCloseAlert}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalAlert;
