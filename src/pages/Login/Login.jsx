import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import useLogin from "../../containers/Login/useLogin";

function Login() {
  const {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
    showPassword,
    togglePasswordVisibility,
  } = useLogin();

  return (
    <div className="AppLogin">
      <div className="SignGlass">
        <div className="signin-container">
          <h2>Login Job List</h2>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) =>
                setFormValue({ ...formValue, username: e.target.value })
              }
              required
            />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) =>
                  setFormValue({ ...formValue, password: e.target.value })
                }
                required
              />
              <button
                type="button"
                className="password-visibility-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit">
              {loading ? "Mohon Tunggu..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
