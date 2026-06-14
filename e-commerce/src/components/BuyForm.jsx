import { useState } from "react";

function BuyForm({ product, onClose }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pincode, setPincode] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !pincode || !address) {
            alert("దయచేసి అన్ని వివరాలు నమోదు చేయండి");
            return;
        }

        alert("Order placed successfully!");
        // Backend కి ఆర్డర్ డేటా పంపవచ్చు (future enhancement)
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px" }}>
            <h3>{product.name} కోసం Order Form</h3>
            <p>ధర: ₹{product.price}</p>

            <input
                type="text"
                placeholder="పేరు"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
            />
            <input
                type="tel"
                placeholder="ఫోన్ నంబర్"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
            />
            <input
                type="text"
                placeholder="పిన్ కోడ్"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
                style={inputStyle}
            />
            <textarea
                placeholder="చిరునామా"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                rows={3}
                style={{ ...inputStyle, resize: "none" }}
            ></textarea>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button type="button" onClick={onClose} style={{ padding: "10px 20px", background: "#ddd" }}>
                    ← Back
                </button>
                <button type="submit" style={{ padding: "10px 20px" }}>
                    Order Confirm
                </button>
            </div>
        </form>
    );
}

const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px"
};

export default BuyForm;
