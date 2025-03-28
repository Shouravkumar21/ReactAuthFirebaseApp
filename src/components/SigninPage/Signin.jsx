import "./Signin.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { TbPasswordUser } from "react-icons/tb";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { app } from "../../firebase";

const auth = getAuth(app);

// for google auth provider

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("You're All Set! Congratulation");
        history("/");
        setEmail("");
        setPassword("");
      })
      .catch(() =>
        alert(
          "Login Failed! Your email or password is incorrect. Please try again"
        )
      );
  };

  const handleReset = () => {
    history("/reset");
  };

  const GoogleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => console.log("Done"))
      .catch(() => console.log("Error"));
  };

  const githubSignUp = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then(() => console.log("🎉 Successfully Signed in with GitHub! 🎉"))
      .catch(() => console.log("Something went wrong"));
  };

  const facebookSignUp = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then(() => console.log("🎉 Successfully Signed in with FaceBook! 🎉"))
      .catch(() => console.log("Something went wrong"));
  };

  return (
    <section>
      <div className="main-container">
        <div className="sign-in-container">
          <h1>Sign in</h1>
          <p>
            Don't have an account?
            <Link to="/Signupp"> Sign up </Link>
          </p>
        </div>

        <div className="sub-main-container">
          {/*  Login Container */}

          <div className="left-login-container">
            <div className="left-middle">
              <div className="email-box">
                <label htmlFor="email" className="email-label">
                  <HiOutlineMail size="25px" />
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password-box">
                <input
                  type="password"
                  placeholder="Password"
                  color="red"
                  className="password-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password" className="password-label">
                  <TbPasswordUser size="25px" />
                </label>
              </div>
              <div className="forgot-box">
                <p>
                  <input type="checkbox" />
                  <label htmlFor="" className="rem-me">
                    Remember me
                  </label>
                </p>
                <p className="forgot-pass" onClick={handleReset}>
                  <Link to="/reset"> Forgot password?</Link>
                </p>
              </div>
              <button className="login-btn" onClick={signIn}>
                Log in
              </button>
            </div>
          </div>

          {/* or-container */}

          <div className="or-container">
            <span className="or-title1"></span>
            <p>or</p>
            <span className="or-title2"></span>
          </div>

          {/* right container */}
          <div className="right-login-container">
            <div className="login-sub-container">
              <div>
                <p className="for-icon">
                  <FaGoogle className="icon" size="22px" />
                  <button
                    className="btn-with-login"
                    id="btn-same"
                    onClick={GoogleSignUp}
                  >
                    Continue with Google
                  </button>
                </p>
              </div>
              <div>
                <p className="for-icon">
                  <FaGithub className="icon" size="22px" />
                  <button
                    className="btn-with-login"
                    id="btn-same"
                    onClick={githubSignUp}
                  >
                    Continue with GitHub
                  </button>
                </p>
              </div>
              <div>
                <p className="for-icon">
                  <FaFacebook className="icon" size="22px" />
                  <button
                    className="btn-with-login"
                    id="btn-same"
                    onClick={facebookSignUp}
                  >
                    Continue with Facebook
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
