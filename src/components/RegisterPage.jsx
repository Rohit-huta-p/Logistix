import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstanceOf";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate("/login")
  }

  // Function to check if user already exists and register the new user
  const handleRegister = async (event) => {
    event.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Check if user already exists by hitting the login API
      const loginResponse = await axiosInstance.post("/api/user/login", {
        email,
        password,
      });

      if (loginResponse.data.token) {
        // User already exists if login is successful
        console.log(loginResponse.data.token);
        
        setError("User already exists. Please login.");
        return;
      }
    } catch (err) {
      // If user does not exist, it will cause a login failure, which is what we want
      console.log("User not found. Proceeding with registration...");
    }

    try {
      // Register the new user if no existing user is found
      const registerResponse = await axiosInstance.post("/api/user/register", {
        email,
        password,
      });
      console.log(registerResponse);
      

      if (registerResponse.data) {
        setSuccess("Registration successful! You can now log in.");
        console.log(success);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        
        
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleRegister} className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>} {/* Show error message */}
        {success && <p className="text-green-500 mb-4">{success}</p>} {/* Show success message */}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
