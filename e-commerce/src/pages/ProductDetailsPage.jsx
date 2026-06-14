import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function ProductDetailsPage() {
    const location = useLocation();
    const shoe = location.state?.shoe;
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState("9"); // Default size

    if (!shoe) {
        return <p>Product not found!</p>;
    }

    const handleAddToCart = () => {
        const shoeWithSize = { ...shoe, size: selectedSize };
        addToCart(shoeWithSize);
    };

    const handleBuyNow = () => {
        const shoeWithSize = { ...shoe, size: selectedSize };
        navigate("/buy", {
            state: {
                product: shoeWithSize,
                from: "/product",
                shoe: shoeWithSize
            }
        });
    };

    return (
        <div style={outerContainer}>
            <div style={cardStyle}>
                <img src="/assets1/nikeimage.png" alt={shoe.name} style={imageStyle} />
                <div style={infoStyle}>
                    <h2 style={titleStyle}>{shoe.name}</h2>
                    <p style={priceStyle}>ధర: ₹{shoe.price}</p>
                    <p style={descStyle}>ఇది ఒక మంచి క్వాలిటీ షూ. డీసెంట్ స్టైల్ & కంఫర్ట్ ఉంది.</p>

                    {/* 👟 Size Dropdown */}
                    <div style={{ marginBottom: "20px" }}>
                        <label>
                            Size:
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                style={{ marginLeft: "8px", padding: "6px", borderRadius: "5px" }}
                            >
                                {[7, 8, 9, 10, 11, 12].map((size) => (
                                    <option key={size} value={size}>{size}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div style={buttonGroupStyle}>
                        <button onClick={handleAddToCart} style={buttonStyle}>Add to Cart</button>
                        <button onClick={handleBuyNow} style={{ ...buttonStyle, backgroundColor: "#27ae60" }}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Styles (same as before)
const outerContainer = {
    padding: "40px 20px",
    backgroundColor: "#f5f5f5",
    display: "block",
};

const cardStyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "900px",
    width: "100%",
    margin: "0 auto",
    gap: "30px"
};

const imageStyle = {
    width: "250px",
    height: "250px",
    objectFit: "contain",
    borderRadius: "8px"
};

const infoStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
};

const titleStyle = {
    fontSize: "28px",
    marginBottom: "10px"
};

const priceStyle = {
    fontSize: "22px",
    color: "#e74c3c",
    marginBottom: "10px"
};

const descStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px"
};

const buttonGroupStyle = {
    display: "flex",
    gap: "15px"
};

const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default ProductDetailsPage;
