import React, { useState } from "react";

const Login = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (!email || !password) {
      alert("Error: Please fill in both email and password fields.");
      return;
    }
    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("You are logged in.");
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    alert("Error: Google login not supported yet.");
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          {/* ... */}
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleFormSubmit}>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {/* ... Password toggle button ... */}
              </div>
              {/* ... */}
              <div className="login-center-buttons">
                <button type="submit" className="btn">Log In</button>
                {/* Google login - simulate with a button */}
                <button type="submit" onClick={handleGoogleLogin}>
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
            <p className="login-bottom-p">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;