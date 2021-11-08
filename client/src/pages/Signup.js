import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section class="hero is-fullheight">
      <div className="hero-body has-text-centered is-flex is-justify-content-center">
      {/* <h3 class="title has-text-black">Login</h3> */}
                   
        <div className="login" style={{ borderRadius: "25px", padding: "1.5rem", boxShadow: "8px 8px 15px #D9D9DA, -8px -8px 15px #D9D9DA"}}>
          <form onSubmit={handleFormSubmit} className="is-flex-direction-column is-align-item-center" style={{ width: "max-content" }}>
            <div className="field">
              <div className="control has-icons-left">               
                <input
                  className="input is-large is-rounded"
                  placeholder="First Name"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="field">
              <div className="control has-icons-left">               
                <input
                  className="input is-large is-rounded"
                  placeholder="Last Name"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="field">
              <div className="control has-icons-left">
                <input 
                  className="input is-large is-rounded"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              </div>
            <div className="field">
              <div className="control has-icons-left">               
                <input
                  className="input is-large is-rounded"
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit" style={{ backgroundColor: "rgb(56, 200, 56)", marginBottom: ".75rem" }}>
              Sign Up
            </button>
              <div style={{ textDecoration: "none", fontSize: "1.2rem", marginBottom: ".75rem" }}>Or</div>
              <Link to="/login" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
              <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit" style={{ backgroundColor: "rgb(56, 200, 56)"}}>
              Sign In
              </button>
              </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
