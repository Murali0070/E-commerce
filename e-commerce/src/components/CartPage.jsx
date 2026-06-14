// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import BuyForm from '../components/BuyForm';

function CartPage() {
    const { cartItems, removeFromCart, showBuyForm, setShowBuyForm, clearCart } = useContext(CartContext);

    const handleOrder = () => {
        if (cartItems.length === 0) {
            alert("Cart ఖాళీగా ఉంది!");
            return;
        }
        setShowBuyForm(true);
    };

    const handleClose = () => {
        setShowBuyForm(false);
        clearCart(); // ఆర్డర్ అయిన తరువాత ఖాళీ చేయాలి
    };

    return (
        <div>
            <h2>Cart లో ఉన్న ప్రోడక్ట్లు</h2>
            {cartItems.length === 0 ? (
                <p>Cart ఖాళీగా ఉంది</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ₹{item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}

            {cartItems.length > 0 && <button onClick={handleOrder}>Buy Now</button>}

            {showBuyForm && <BuyForm shoe={{ name: "Cart Items" }} onClose={handleClose} />}
        </div>
    );
}

export default CartPage;
