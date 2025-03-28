import React from "react";
import "./../ForgotPassword/ForgotPassword.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../firebase";

const database = getAuth(app);

const ForgotPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        alert("Check Your Email");
      })
      .catch(() => {
        alert("Please Enter Valid Email");
      });
  };
  return (
    <div className="main-f">
      <h1 className="h-f">Forgot Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="email" className="input-f" />
        <button className="bt-f"> Reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
