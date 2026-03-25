import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    let isValid = true;

    if (!password || !confirmPassword) {
      setError("Enter Password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setError("Password is Incorrect");
      isValid = false;
    } else {
      setError("");
    }
    return isValid;
  };
  const handleRedirect = (e) => {
    navigate(`/forgotpassword`);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
       navigate('/login');
      alert("Password is Changed");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="w-full max-w-md mx-4 rounded-2xl p-8 bg-linear-to-b from-[#E6D39B] to-[#593A1E]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center text-white mb-3">Reset Password</h1>
         {error && <p className="text-red-600 text-center mb-2">{error}</p>}
          <div className="mb-5">
            <label className="block mb-2 text-xs uppercase tracking-widest text-white">
              New Password
            </label>
            <div className="relative rounded-lg overflow-hidden  flex">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm outline-none"
                style={{
                  background: "#FFF",
                  color: "#000",
                  fontFamily: "inherit",
                  fontSize: 14,
                }}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-xs uppercase tracking-widest text-white">
              Confirm Password
            </label>
            <div className="relative rounded-lg overflow-hidden  flex">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 text-sm outline-none"
                style={{
                  background: "#FFF",
                  color: "#000",
                  fontFamily: "inherit",
                  fontSize: 14,
                }}
                placeholder=""
              />
            </div>
          </div>
          <button type="submit" className="w-full py-2 bg-[#593A1E] rounded-2xl mb-2 border-white">
            Submit
          </button>
        </form>
        <button onClick={handleRedirect} className="w-full text-white underline">back</button>
      </div>
    </div>
  );
};

export default ResetPassword;
