// src/components/Auth.js
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate, Navigate} from "react-router-dom";
import "./LogIn.css";

const Auth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      const data = res.data;
      navigate("/");
      console.log(data);
    } 
    catch (err) {
      console.log("Reached catch");
    
      if (err.response) {
        console.log("Error Response:", err.response.data);
        setError(err.response.data.message || "Something went wrong");
      } else {
        console.log("Error:", err.message);
        setError("Network error or server unreachable");
      }
    }    
  };

  return (
    <div className="container">
      <div className="login-form-container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button className="submit-btn" type="submit">Log In</button>
          {error && <p className="error">{error}</p>}
          <span>Don't have an account? <Link to="/signup">signup</Link></span>
        </form>
      </div>
    </div>
  );
};

export default Auth;
