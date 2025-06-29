import React from "react";
import "./style.css"
const Login = () => {
  return (
    <>
      <div class="login-container">
        <div class="left-container">
          <p class="new_user">
            New User? <a href="#">Sign Up</a>
          </p>
          <h2>Sign In</h2>
          <form action="index.html">
            <label for="username" class="label">
              User Name:
            </label>
            <br />
            <input
              type="text"
              id="username"
              class="input_box"
              autocomplete="off"
              required
            />
            <br />
            <label for="pass" class="label">
              password:
            </label>
            <br />
            <input type="password" id="pass" class="input_box" required />
            <br />
            <input type="checkbox" id="terms" required />
            <label for="terms" class="label1">
              I have read and agree with the{" "}
              <a href="#">Terms and Conditions</a>
              and our <a href="#">Privacy Policy</a>
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="right-container">
          <img src="./4957136.jpg" alt="Login image" />
        </div>
      </div>
    </>
  );
};

export default Login;
