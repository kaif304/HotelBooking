import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const res = await axios.post("http://localhost:5000/api/auth/signup", formData, {headers: {"Content-Type" : "application/json"}});
            
            setSuccess("Signup successful! You can now log in.");
            setFormData({ name: "", email: "", phone: "", address: "", password: "" });
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="form-container">
            <div>
                <h2>Sign Up</h2>
            </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="name input-div">
                        <label htmlFor="name"></label>
                        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="email">
                        <label htmlFor="email"></label>
                        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="phone">
                        <label htmlFor="phone"></label>
                        <input name="phone" type="number" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="address">
                        <label htmlFor="address"></label>
                        <input name="address" type="text" placeholder="Address" value={formData.address} onChange={handleChange} required />
                    </div>

                    <div className="password">
                        <label htmlFor="password"></label>
                        <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    </div>

                    <button className="submit-btn" type="submit">Submit</button>
                    <span>Already have an account? <Link to="/login">login</Link></span>

                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                </form>
            </div>
        </div>
    );
}

export default Signup;
