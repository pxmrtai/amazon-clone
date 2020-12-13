import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
          alt=""
          className="login__image"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By Sign-in, you agree to AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice. Please see our Privacy Notice, our Cookies Notice and
          our Interest-Based Ads Notice
        </p>
        <a href="#">Need help?</a>
        <button className="login__registerButton" onClick={register}>
          Create your Fake Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
