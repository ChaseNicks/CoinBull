import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="hero is-halfheight">
      <div className="hero-body has-text-centered is-flex is-justify-content-center" style={{ flexDirection: "column" }}>
        <h1 className="title has-text-black is-size-1 is-size-2-mobile" style={{ marginBottom: "3rem" }}>Sign In</h1>
        <div
          className="login"
          style={{
            borderRadius: "25px",
            padding: "1.5rem",
            boxShadow: "8px 8px 15px #D9D9DA, -8px -8px 15px #D9D9DA",
          }}
        >
          <form
            onSubmit={handleFormSubmit}
            className="is-flex-direction-column is-align-item-center"
            style={{ width: "max-content" }}
          >
            <div className="field">
              <div className="control has-icons-left">
                <input
                  className="input is-large is-rounded"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                  required
                />
                <span className="icon is-left">
                  <i className="fas fa-envelope" style={{ zIndex: "1" }}></i>
                </span>
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
                  required
                />
                <span className="icon is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginBottom: ".75rem",
              }}
            >
              Sign In
            </button>
            <div
              style={{
                textDecoration: "none",
                fontSize: "1.2rem",
                marginBottom: ".75rem",
              }}
            >
              Or
            </div>
            <Link
              to="/signup"
              style={{ textDecoration: "none", fontSize: "1.2rem" }}
            >
              <button
                className="button is-block is-fullwidth is-primary is-medium is-rounded"
                type="submit"
                style={{ backgroundColor: "rgb(56, 200, 56)" }}
              >
                Create an Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
