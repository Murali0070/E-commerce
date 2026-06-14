import React from "react";
import ShoesCard from "../components/ShoesCard";

const shoesData = [
    { id: 1, name: "Nike Air Max", price: 4999 },
    { id: 2, name: "Adidas Running", price: 3299 },
    { id: 3, name: "Puma Sports", price: 2899 },
    { id: 4, name: "Reebok Classic", price: 3999 },
    { id: 5, name: "Skechers GoWalk", price: 3599 },
    { id: 6, name: "Woodland Trekking", price: 4599 },
    { id: 7, name: "Converse All Star", price: 2699 },
    { id: 8, name: "Bata Comfit", price: 1899 },
    { id: 9, name: "Campus Shoes", price: 1799 },
    { id: 10, name: "HRX Sports", price: 2999 }
];

function ShoesList() {
    return (
        <div style={wrapperStyle}>
            {shoesData.map((shoe) => (
                <ShoesCard key={shoe.id} shoe={shoe} />
            ))}
        </div>
    );
}

const wrapperStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#d7c9b1   " // ✅ Add this line
};

export default ShoesList;
