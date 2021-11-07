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
    // <div className="container my-1">
    //   <Link to="/signup"> Go to Signup</Link>

    //   <h2>Login</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <input
    //         placeholder="Email"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {error ? (
    //       <div>
    //         <p className="error-text">The provided credentials are incorrect</p>
    //       </div>
    //     ) : null}
    //     <div className="flex-row flex-end">
    //       <button type="submit">Signin</button>
    //     </div>
    //   </form>
    // </div>

    <div className="hero-body has-text-centered">
      <div
        className="login "
        style={{
          borderRadius: "25px",
          padding: "1.5rem",
          boxShadow: "8px 8px 15px gray, -8px -8px 15px gray",
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          className="is-flex-direction-column is-align-item-center"
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
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input is-large is-rounded"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
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
            style={{ backgroundColor: "rgb(56, 200, 56)" }}
          >
            Sign In
          </button>
        </form>
        <br />
        <div className="level-item has-text-centered">
          <div>
            <Link to="/signup" className="">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
