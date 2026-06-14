// src/components/FormalCardAPI.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function FormalCardAPI() {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/formal-api")} style={cardStyle}>
            <h3>Formal Shoes from API</h3>
        </div>
    );
}

const cardStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    cursor: "pointer",
    boxShadow: "0 0 8px rgba(0,0,0,0.1)",
    width: "200px",
    margin: "10px auto",
};

export default FormalCardAPI;
