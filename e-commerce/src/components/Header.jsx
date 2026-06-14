import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <style>{`
            .header {
                position: fixed;
                top: 0;
                right: 0;
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding: 20px 40px;
                background-color: #fff9f4;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                z-index: 1000;
            }

            .header a {
                margin-left: 20px;
                text-decoration: none;
                color: #a45b3e;
                font-size: 16px;
                font-weight: 500;
                transition: color 0.3s ease;
            }

            .header a:hover {
                color: #7e3f28;
                text-decoration: underline;
            }
        `}</style>

            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/shoes">Shoes</Link>
                <Link to="/cart">Cart 🛒</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
        </header>
    );
}

export default Header;
