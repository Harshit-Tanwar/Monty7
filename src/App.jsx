import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Image from "./assets/backImage.jpg";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
    const backImage = {
        backgroundImage : `url(${Image})`,
        height : '100vh',
        width : '100%',
        backgroundSize : 'cover', 
        backgroundRepeat : 'no-repeat',
    }
  return (
    <div style={backImage} className="relative">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
};

export default App;
