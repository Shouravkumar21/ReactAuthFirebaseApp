import React from "react";
import Signin from "./components/SigninPage/Signin";
import Signupp from "./components/SignupPage/Signupp";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/Signupp" element={<Signupp />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default App;
