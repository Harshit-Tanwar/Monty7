import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userError, setuserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const userRegex = /(^[a-zA-Z0-9_]{3,20}$) | (^[6-9]\d{9}$)/;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/;

  const validateForm = () => {
    let isValid = true;
    
    if (!userRegex.test(user)) {
      setuserError("Invalid name");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (!passwordRegex.test(password)) {
      setPasswordError("Incorrect Password");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };
  const handleRedirect = (e)=>{
    navigate(`/${e.target.value}`);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/home');
      alert("Login Succesful");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="w-full max-w-md mx-4 rounded-2xl pb-4 bg-linear-to-b from-[#E6D39B] to-[#593A1E]">
       <button className="ml-5 mt-2 text-sm">Back</button>
        <form className="px-6" onSubmit={handleSubmit}>
          <h1 className="text-center text-2xl mb-4 text-white">Sign In</h1>
          {/* UserName */}
          <div className="mb-5">
            <label className="block mb-2 text-xs tracking-widest uppercase text-white">
              Username / Mobile Number
            </label>
            <div className="relative rounded-lg overflow-hidden transition-all duration-300">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-4 py-3 text-sm outline-none bg-transparent"
                style={{
                  background: "#fff",
                  color: "#000",
                  fontFamily: "inherit",
                  fontSize: 14,
                }}
                placeholder=""
              />
            </div>
              {userError && <p className="text-red-600">{userError}</p>}
          </div>
          {/* Password */}
          <div className="">
            <label className="block mb-2 text-xs tracking-widest uppercase text-white">
              Your Password
            </label>
            <div className="relative rounded-lg overflow-hidden transition-all duration-300">
              <input
                type={showPassword ? "text" : "password"}
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
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200"
                style={{ color: showPassword ? "#c9a84c" : "#5a4820" }}
              >
                {showPassword ? (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </button>
            </div>
              {passwordError && <p className="text-red-600">{passwordError}</p>}
          </div>
          {/* Forgot password */}
          <div className="flex justify-end mb-6">
            <button onClick={handleRedirect} value={'forgotpassword'} className="text-xs duration-200 underline text-white">
              Forgot your password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#593A1E] rounded-2xl mb-2"
          >
            Login
          </button>
        </form>
          <p className="text-center text-xs text-white mb-2">
            Dont have an Account? <button onClick={handleRedirect} value={'signin'} className="underline">Sign Up</button>
          </p>
      </div>
    </div>
  );
};

export default Login;
