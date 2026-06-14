import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const navigate = useNavigate();

    return (
        <div>
            <style>{`
        .form-container {
          max-width: 400px;
          margin: 60px auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          font-family: Arial, sans-serif;
        }
        .form-container h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        .form-container input {
          width: 100%;
          padding: 12px;
          margin-bottom: 16px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 16px;
        }
        .form-container input:focus {
          border-color: #007bff;
          outline: none;
        }
        .form-container button {
          padding: 10px 18px;
          margin-right: 10px;
          background-color: #007bff;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          font-size: 16px;
        }
        .form-container button:hover {
          background-color: #0056b3;
        }
        .back-button {
          background-color: #6c757d;
        }
        .back-button:hover {
          background-color: #5a6268;
        }
      `}</style>

            <div className="form-container">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <button className="back-button" onClick={() => navigate("/")}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default LoginForm;
