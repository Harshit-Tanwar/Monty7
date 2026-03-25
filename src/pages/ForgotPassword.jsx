import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const mobileRegex = /^[6-9]\d{9}$/;
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const validated = () => {
       let isValid = true;
    if (!mobileRegex.test(mobileNumber)) {
      setError("Please enter valid number");
      isValid = false
    } else {
      setError("");
    }
    return isValid;
  };
  const handleRedirect = (e) => {
    navigate(`/${e.target.value}`);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (validated()) {
      navigate("/resetpassword");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="w-full max-w-md mx-4 rounded-2xl p-8 bg-linear-to-b from-[#E6D39B] to-[#593A1E]">
        <h1 className="text-center text-white mb-5">Forgot Password</h1>
        <form onSubmit={handleForm}>
          <div className="mb-5">
            <label className="block mb-2 text-xs uppercase tracking-widest text-white">
              Mobile Number
            </label>
            <div className="relative rounded-lg overflow-hidden  flex">
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm outline-none"
                style={{
                  background: "#FFF",
                  color: "#000",
                  fontFamily: "inherit",
                  fontSize: 14,
                }}
                placeholder=""
              
              />
              <button className="bg-black w-20 text-white text-sm">OTP</button>
            </div>
            {error && <p className="text-red-900">{error}</p> }
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#593A1E] rounded-2xl mb-2 border-white border"
          >
            Reset Password
          </button>
        </form>
        <button
          onClick={handleRedirect}
          value={"login"}
          className="w-full text-white underline"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
