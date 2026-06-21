import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import nikeImage from "../assets1/nikeImage.png";

function FormalShoesCard({ shoe }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("9"); // default size

    const handleViewDetails = () => {
        navigate("/product", { state: { shoe, selectedSize } });
    };

    const handleAddToCart = () => {
        const shoeWithSize = { ...shoe, size: selectedSize };
        addToCart(shoeWithSize);
    };

    return (
        <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "10px", width: "220px" }}>
            <img
                src={nikeImage}
                alt={shoe.name}
                width="100%"
                height="160px"
                style={{ cursor: "pointer" }}
                onClick={handleViewDetails}
            />
            <h3 style={{ cursor: "pointer", color: "blue" }} onClick={handleViewDetails}>
                {shoe.name}
            </h3>
            <p>ధర: ₹{shoe.price}</p>

            {/* Size Dropdown */}
            <label style={{ fontSize: "14px", marginBottom: "5px", display: "block" }}>
                Size:
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    style={{ marginLeft: "5px", padding: "4px", borderRadius: "4px" }}
                >
                    {[7, 8, 9, 10, 11, 12].map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </label>

            <button onClick={handleAddToCart} style={{ marginTop: "8px" }}>Add to Cart</button>
        </div>
    );
}

export default FormalShoesCard;
