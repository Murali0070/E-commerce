import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import nikeImage from "../assets1/nikeimage.png";

function ShoesCard({ shoe }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState("9"); // Default selected size

    const handleBuyNow = () => {
        navigate("/buy", { state: { product: { ...shoe, size: selectedSize } } });
    };

    const handleViewDetails = () => {
        navigate("/product", { state: { shoe: { ...shoe, size: selectedSize } } });
    };

    const handleAddToCart = () => {
        const shoeWithSize = { ...shoe, size: selectedSize };
        addToCart(shoeWithSize);
    };

    return (
        <div style={cardStyle}>
            <img
                src={nikeImage}
                alt={shoe.name}
                style={imageStyle}
                onClick={handleViewDetails}
            />
            <h3 style={{ cursor: "pointer" }} onClick={handleViewDetails}>
                {shoe.name}
            </h3>

            <p>ధర: ₹{shoe.price}</p>

            {/* 👟 Size Dropdown */}
            <label>
                Size:
                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    style={{ marginLeft: "8px", padding: "4px", borderRadius: "5px" }}
                >
                    {[7, 8, 9, 10, 11, 12].map((size) => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </label>

            <div style={{ marginTop: "10px" }}>
                <button onClick={handleAddToCart} style={{ marginRight: "10px" }}>
                    Add to Cart
                </button>
                <button onClick={handleBuyNow}>Buy</button>
            </div>
        </div>
    );
}

const cardStyle = {
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "10px",
    width: "220px",
    margin: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    textAlign: "center"
};

const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
    cursor: "pointer"
};

export default ShoesCard;
