import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Auth.css";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-page">
      <div className="register-container">
        {/* LEFT SIDE */}
        <div className="register-left">
          <div className="register-logo">
            <div className="register-logo-icon">B</div>

            <span>
              Movie<span>Rec</span>
            </span>
          </div>

          <div className="register-left-content">
            <h1>
              Your personal
              <br />
              <span>movie guide.</span>
            </h1>

            <p>
              Create your account and get personalized
              <br />
              recommendations powered by machine learning.
            </p>
          </div>

          <div className="register-features">
            <span>• TMDB Vectorization</span>
            <span>• Cosine Similarity</span>
            <span>• Content-Based Filtering</span>
            <span>• Scikit-learn ML</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="register-right">
          <div className="register-form">
            <h2>Create your account</h2>

            <p className="register-subtitle">
              Join MovieRec and start discovering
            </p>

            {/* GOOGLE */}
            <button className="register-google-button">
              <span className="google-icon">G</span>
              Sign up with Google
            </button>

            {/* DIVIDER */}
            <div className="register-divider">
              <span>or create with email</span>
            </div>

            {/* FULL NAME */}
            <label>Full Name</label>

            <input
              className="register-input"
              type="text"
              placeholder="John Doe"
            />

            {/* EMAIL */}
            <label>Email Address</label>

            <input
              className="register-input"
              type="email"
              placeholder="you@gmail.com"
            />

            {/* PASSWORD */}
            <label>Password</label>

            <div className="register-password-box">
              <input
                className="register-input"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
              />

              <button
                type="button"
                className="register-eye-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "◉" : "◌"}
              </button>
            </div>

            {/* CONFIRM PASSWORD */}
            <label>Confirm Password</label>

            <div className="register-password-box">
              <input
                className="register-input"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter your password"
              />

              <button
                type="button"
                className="register-eye-button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "◉" : "◌"}
              </button>
            </div>

            {/* TERMS */}
            <label className="terms-label">
              <input type="checkbox" />

              <span>
                I agree to the
                <a href="#"> Terms of Service</a> and
                <a href="#"> Privacy Policy</a>
              </span>
            </label>

            {/* CREATE ACCOUNT */}
            <button className="create-account-button">Create Account</button>

            {/* LOGIN */}
            <p className="register-login-text">
              Already have an account?
              <Link to="/"> Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
