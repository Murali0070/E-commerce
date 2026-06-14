import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BuyPage from './pages/BuyPage';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ShoesList from './components/ShoesList';
import CartPage from './components/CartPage';
import FormalShoesPage from "./pages/FormalShoesPage";
import FormalFromAPIPage from "./pages/FormalFromAPIPage";
import { CartProvider } from './context/CartContext';
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/buy" element={<BuyPage />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/shoes" element={<ShoesList />} />
                    <Route path="/formal-shoes" element={<FormalShoesPage />} />
                    <Route path="/formal-api" element={<FormalFromAPIPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product" element={<ProductDetailsPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;