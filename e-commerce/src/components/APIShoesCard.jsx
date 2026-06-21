import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import nikeImage from "../assets1/nikeImage.png";
function APIShoesCard({ shoe }) {
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleBuy = () => {
        navigate("/buy", { state: { product: shoe } });
    };

    return (
        <div style={cardStyle}>
            <img src={nikeImage} alt={shoe.name} style={imageStyle} />
            <h3>{shoe.name}</h3>
            <p>ధర: ₹{shoe.price}</p>
            <button onClick={() => addToCart(shoe)} style={{ marginRight: "10px" }}>Add to Cart</button>
            <button onClick={handleBuy}>Buy</button>
        </div>
    );
}

const cardStyle = {
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "10px",
    width: "220px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    textAlign: "center"
};

const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px"
};

export default APIShoesCard;
