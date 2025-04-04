import React, { useState } from "react";
import "./App.scss";
function Signup() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    return re.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      first: !formData.first ? "First name is required" : "",
      last: !formData.last ? "Last name is required" : "",
      email: !formData.email
        ? "Email is required"
        : !validateEmail(formData.email)
        ? "Invalid email format"
        : "",
      password: !formData.password
        ? "Password is required"
        : !validatePassword(formData.password)
        ? "Password must contain at least 8 characters, one uppercase letter, one special character,  one number."
        : "",
      confirmPassword: !formData.confirmPassword
        ? "Confirm password is required"
        : formData.password !== formData.confirmPassword
        ? "Passwords do not match"
        : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);
    if (isValid) {
      console.log("Form submitted successfully!", formData);
      alert("Registration successful!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className={`form-group ${errors.first ? "has-error" : ""}`}>
              <label>First Name</label>
              <input
                label="First Name"
                type="text"
                name="first"
                placeholder="First name"
                value={formData.first}
                onChange={handleChange}
                className={errors.first ? "error-border" : ""}
              />
              {errors.first && <p className="error-message">{errors.first}</p>}
            </div>
            <div className={`form-group ${errors.last ? "has-error" : ""}`}>
              <label>Last Name</label>
              <input
                type="text"
                name="last"
                placeholder="Last name"
                value={formData.last}
                onChange={handleChange}
                className={errors.last ? "error-border" : ""}
              />
              {errors.last && <p className="error-message">{errors.last}</p>}
            </div>
          </div>

          <div className={`form-group ${errors.email ? "has-error" : ""}`}>
            <label>Enter Email</label>
            <input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error-border" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className={`form-group ${errors.password ? "has-error" : ""}`}>
            <label>Password</label>
            <input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error-border" : ""}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div
            className={`form-group ${
              errors.confirmPassword ? "has-error" : ""
            }`}
          >
            <label>Confirm Password</label>
            <input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error-border" : ""}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
