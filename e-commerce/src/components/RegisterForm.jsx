import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { name, email, password };

        try {
            const response = await fetch("http://localhost:5261/api/Users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("Registration successful!");
                navigate("/login");
            } else {
                const data = await response.json();
                setError(data.message || "Registration failed");
            }
        } catch (error) {
            setError("Network error: " + error.message);
        }
    };

    return (
        <div className="form-container">
            <style>{`
        .form-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 30px;
          background-color: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .form-container h2 {
          margin-bottom: 20px;
        }
        .form-container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .form-container button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
        }
        .form-container button:hover {
          background-color: #0056b3;
        }
        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>

            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
                {error && <div className="error">{error}</div>}
            </form>
            <br />
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    );
}

export default RegisterForm;
