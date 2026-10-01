import React, { useState } from "react";
import "../css/Auth.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT PANEL */}
        <div className="login-left">
          <div className="login-logo">
            <div className="logo-icon">B</div>
            <span>
              Movie<span>Rec</span>
            </span>
          </div>

          <div className="login-left-content">
            <h1>
              Discover movies
              <br />
              <span>you'll love.</span>
            </h1>

            <p>
              ML-powered recommendations based on genres, cast,
              <br />
              director, and story similarity.
            </p>
          </div>

          <div className="movie-posters">
            <div className="poster poster1"></div>
            <div className="poster poster2"></div>
            <div className="poster poster3"></div>
            <div className="poster poster4"></div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <div className="login-form">
            <h2>Welcome back</h2>

            <p className="login-subtitle">Sign in to your MovieRec account</p>

            {/* GOOGLE */}
            <button className="google-button">
              <span className="google-icon">G</span>
              Continue with Google
            </button>

            {/* DIVIDER */}
            <div className="divider">
              <span>or sign in with email</span>
            </div>

            {/* EMAIL */}
            <label>Email Address</label>

            <input
              className="login-input"
              type="email"
              placeholder="you@gmail.com"
            />

            {/* PASSWORD */}
            <label>Password</label>

            <div className="password-box">
              <input
                className="login-input"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "◉" : "◌"}
              </button>
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button className="forgot-password">Forgot password?</button>
            </div>

            {/* LOGIN */}
            <button className="signin-button">Sign in to MovieRec</button>

            {/* GUEST */}
            <button className="guest-button">Continue as Guest</button>

            {/* SIGN UP */}
            <p className="signup-text">
              Don't have an account?
              <a href="/register"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
