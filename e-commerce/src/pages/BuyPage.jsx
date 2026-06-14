import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BuyForm from "../components/BuyForm";

function BuyPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;
    const from = location.state?.from;
    const shoe = location.state?.shoe;

    if (!product) {
        return <p>Product not found. Please go back and select a product.</p>;
    }

    const handleClose = () => {
        if (from === "/product" && shoe) {
            navigate("/product", { state: { shoe } });
        } else {
            navigate("/shoes");
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            {/* ✅ Display Product Details */}
            <div style={productInfoStyle}>
                <h2>{product.name}</h2>
                <p><strong>ధర:</strong> ₹{product.price}</p>
                <p><strong>Size:</strong> {product.size}</p>
            </div>

            {/* 📦 Buy Form */}
            <BuyForm product={product} onClose={handleClose} />
        </div>
    );
}

const productInfoStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px"
};

export default BuyPage;
