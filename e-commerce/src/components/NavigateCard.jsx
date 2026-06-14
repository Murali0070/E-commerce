// src/components/NavigateCard.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateCard({ title, description, route }) {
    const navigate = useNavigate();

    const cardStyle = {
        backgroundColor: "#fff9f4", // Light soft background
        border: "1px solid #d8bfae", // Matching beige tone
        borderRadius: "12px",
        padding: "20px",
        width: "250px",
        margin: "20px auto",
        textAlign: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        color: "#333",
    };

    const headingStyle = {
        color: "#a45b3e", // Warm brown for titles
        marginBottom: "10px",
    };

    const paragraphStyle = {
        fontSize: "14px",
        color: "#444",
        marginBottom: "15px",
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    };

    return (
        <div
            style={cardStyle}
            onClick={() => navigate(route)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 style={headingStyle}>{title}</h2>
            <p style={paragraphStyle}>{description}</p>
            <div
                style={{
                    backgroundColor: "#e6bca8",
                    color: "#000",
                    padding: "10px 20px",
                    borderRadius: "6px",
                    display: "inline-block",
                    marginTop: "10px",
                    fontWeight: "500",
                }}
            >
                View
            </div>
        </div>
    );
}

export default NavigateCard;
