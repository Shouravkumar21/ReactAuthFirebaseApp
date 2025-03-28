import React, { useState } from "react";
import "./Signupp.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const Signupp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Your account is created");
        setEmail("");
        setPassword("");
      })
      .catch(() => alert("Something went wrong"));
  };
  return (
    <div className="main-upp">
      <div className="subsign-upp">
        <h1 className="head-upp">Signup-Here</h1>
        <div className="email-uppp">
          <input
            type="email"
            required
            placeholder="Email"
            className="ep-upp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="psw">
          <input
            type="password"
            required
            placeholder="Password"
            className="ep-upp"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="sign-upp" onClick={signupUser}>
          Signup
        </button>
        <Link to="/">
          <FaBackward className="icon-upp" size="30px" />
        </Link>
      </div>
    </div>
  );
};

export default Signupp;
