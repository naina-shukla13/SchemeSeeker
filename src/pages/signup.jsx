import React, { useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
//import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

 const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", formData);
      navigate("/login"); // Redirect to login
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };


  return (
   
  <div className="auth-form-container">
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Create Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
      
        {error && <p className="auth-error">{error}</p>}

      <p className="auth-footer">
        Already have an account? <Link to="/login">Sign In</Link>

      </p>
    </form>
  </div>


  );
};

export default Signup;
